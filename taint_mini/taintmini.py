import os
import time
from .wxjs import gen_pdg, handle_wxjs
from .wxml import handle_wxml
from .storage import Storage
import multiprocessing as mp

# 过滤结果
def filter_results(results, config):
    # 如果配置文件中没有既没有源也没有汇就返回原始结果
    if ("sources" not in config or len(config["sources"]) == 0) and \
            ("sinks" not in config or len(config["sinks"]) == 0):
        return results

    filtered = {}
    # 读取results中的每个页码的内容
    for page in results:
        filtered[page] = []
        for flow in results[page]:
            # 如果配置了源
            if "sources" in config and len(config["sources"]) > 0:
                # 如果配置了汇
                if "sinks" in config and len(config["sinks"]) > 0:
                    # 如果获取的源和汇都在配置文件中，就保留
                    if flow['source'] in config["sources"] and flow['sink'] in config["sinks"]:
                        filtered[page].append(flow)
                    # 如果配置文件源中有[double_binding]（默认配置文件中有），并且获取的源中有[data from，获取的汇在配置文件中，就保留
                    if "[double_binding]" in config["sources"] and "[data from" in flow['source'] \
                            and flow['sink'] in config["sinks"]:
                        filtered[page].append(flow)
                # 没配置汇
                else:
                    # 默认不要，没意义的代码
                    if flow['sink'] in config["sinks"]:
                        filtered[page].append(flow)
            # 没配置源
            else:
                # 如果配置了汇
                if "sinks" in config and len(config["sinks"]) > 0:
                    # 如果获取的汇在配置文件中，就保留
                    if flow['sink'] in config["sinks"]:
                        filtered[page].append(flow)
        # 如果全部过滤了，就删除这个页
        if len(filtered[page]) == 0:
            filtered.pop(page)
    return filtered

# 分析小程序单个页面
def analyze_worker(app_path, page_path, results_path, config, queue):
    # 调用gen_pdg生成数据流图，并保存在results_path
    r = gen_pdg(os.path.join(app_path, "pages", f"{page_path}.js"), results_path)
    # 初始化存储
    Storage.init(r, app_path, page_path, config)
    # 对wxml文件进行处理
    handle_wxml(os.path.join(app_path, "pages", f"{page_path}.wxml"))
    # 对js文件进行处理
    handle_wxjs(r)
    # 获得结果
    results = Storage.get_instance().get_results()
    # 结果过滤
    filtered = filter_results(results, config)
    # 将结果放入队列
    queue.put(filtered)

# 处理结果
def analyze_listener(result_path, queue):
    with open(result_path, "w") as f:
        # 写入表头
        f.write("page_name | page_method | ident | source | sink\n")
        # 将结果放进文件
        while True:
            message = queue.get()
            if message == "kill":
                break
            if isinstance(message, dict):
                for page in message:
                    for flow in message[page]:
                        f.write(f"{page} | {flow['method']} | {flow['ident']} | {flow['source']} | {flow['sink']}\n")
                f.flush()
        f.flush()

# 判断页面代码是否齐全
def obtain_valid_page(files):
    # 创建了一个空的集合（set）并将其赋值给变量sub_pages
    sub_pages = set()
    # 将每个文件名分离出来
    for f in files:
        sub_pages.add(str.split(f, ".")[0])
    # 判断分离出的文件是否包含js文件和wxml文件，如果不是都有就不考虑了
    for f in list(sub_pages):
        if f"{f}.js" not in files or f"{f}.wxml" not in files:
            sub_pages.remove(f)
    return sub_pages

# 获取合理的页面
def retrieve_pages(app_path):
    # [创建了一个空的集合（set）并将其赋值给变量 pages]
    pages = set()
    # 读取输入路径中pages文件夹中的文件
    # [先进行路径拼接输入路径和pages，遍历指定目录下的所有文件和子目录，root 是当前目录的路径，dirs 是当前目录中的子目录列表，files 是当前目录中的文件列表。]
    for root, dirs, files in os.walk(os.path.join(app_path, "pages/")):
        # 如果文件合理，即存在同名的js和wxml文件，那就在返回中加入拼接后的内容
        for s in obtain_valid_page(files):
            # [这部分是在当前文件路径 root 中去掉父目录路径的前缀，即从 os.path.join(app_path, 'pages/') 的长度开始截取。这样得到的结果就是相对于 'pages/' 目录的相对路径。]
            pages.add(f"{root[len(os.path.join(app_path, 'pages/')):]}/{s}")
    return pages

# 分析单个小程序
def analyze_mini_program(app_path, results_path, config, workers, bench):
    # 判断输入路径是否存在
    if not os.path.exists(app_path):
        print("[main] invalid app path")

    # 获取页面，主要是获取输入路径中同时有同名js和wxml的文件
    pages = retrieve_pages(app_path)
    # 判断是否有效获取了页面
    if len(pages) == 0:
        print(f"[main] no page found")
        return

    # 判断输出路径是否存在
    if not os.path.exists(results_path):
        # 不存在就创建一个输出路径
        os.mkdir(results_path)
    # 如果输出路径是一个文件，就报错
    elif os.path.isfile(results_path):
        print(f"[main] error: invalid output path")
        return

    # [manager 是一个用于管理共享对象和数据的实例。通过 manager，可以创建共享的数据结构，这些数据结构可以被多个进程同时访问和修改。]
    manager = mp.Manager()
    queue = manager.Queue()
    # 运行下来workers是1
    # [创建一个进程池，用于并行执行任务，设定进程数量。]
    pool = mp.Pool(workers if workers is not None else mp.cpu_count())

    # [在进程池中异步地执行 analyze_listener 函数，通过传递结果文件的路径和队列对象，实现了监听相关任务的并行执行。(os.path.join(results_path, f"{os.path.basename(app_path)}-result.csv"), queue)第一个元素是结果文件的路径，第二个元素是一个队列（queue）对象，用于在主进程和子进程之间进行通信。]
    pool.apply_async(analyze_listener, (os.path.join(results_path, f"{os.path.basename(app_path)}-result.csv"), queue))

    bench_out = None
    # 判断是否需要进行基准测试
    if bench:
        # 已可写权限打开基准测试文件，写入表头
        bench_out = open(os.path.join(results_path, f"{os.path.basename(app_path)}-bench.csv"), "w")
        bench_out.write("page|start|end\n")

    # 用workers字典存储每个页面的进程情况
    workers = dict()
    for p in pages:
        # 每个页面对应一个字典，字典的键包括功能job、启动时间begin_time、结束时间end_time
        workers[p] = dict()
        # 运行analzye_work并将结果存储到页面对应字典的job的值中
        workers[p]["job"] = pool.apply_async(analyze_worker, (app_path, p, results_path, config, queue))
        # 如果要进行基准测试就记录开始的时间
        if bench:
            workers[p]["begin_time"] = int(time.time())

    # collect results
    for p in pages:
        try:
            # 如果运行结束就获取结果
            # [调用get方法获取异步任务的结果。这个方法是阻塞的，也就是说如果子进程还没有完成任务，主进程会等待直到任务完成并返回结果。]
            workers[p]["job"].get()
        except Exception as e:
            print(f"[main] critical error: {e}")
        # [finally 块中的代码无论是否发生异常都会被执行。这里的代码通常用于进行清理操作。]
        finally:
            if bench:
                workers[p]["end_time"] = int(time.time())

    # 在队列尾部加入kill方便检测是否结束
    queue.put("kill")
    # 关闭进程池
    pool.close()
    pool.join()

    # 如果需要基准测试，就完成基准测试报告
    if bench and bench_out is not None:
        for p in pages:
            bench_out.write(f"{p}|{workers[p]['begin_time']}|{workers[p]['end_time']}\n")
        bench_out.close()
