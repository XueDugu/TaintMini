import os
import time
from .wxjs import gen_pdg, handle_wxjs
from .wxml import handle_wxml
from .storage import Storage
import multiprocessing as mp

def filter_results(results, config):
    # 如果没有sources，直接返回结果
    if ("sources" not in config or len(config["sources"]) == 0) and \
            ("sinks" not in config or len(config["sinks"]) == 0):
        print("Lack sources or sinks")
        return results
    print("Start filtering results")
    filtered = {}
    for page in results:
        filtered[page] = []
        for flow in results[page]:
            # 过滤源
            if "sources" in config and len(config["sources"]) > 0:
                if "sinks" in config and len(config["sinks"]) > 0:
                    # 应用源和汇的过滤器
                    if flow['source'] in config["sources"] and flow['sink'] in config["sinks"]:
                        filtered[page].append(flow)
                    # 处理源中的双重绑定
                    if "[double_binding]" in config["sources"] and "[data from" in flow['source'] \
                            and flow['sink'] in config["sinks"]:
                        filtered[page].append(flow)
                else:
                    # 没有汇的过滤器，只应用源的过滤器
                    if flow['sink'] in config["sinks"]:
                        filtered[page].append(flow)
            else:
                # 没有源的过滤器，应用汇的过滤器
                if "sinks" in config and len(config["sinks"]) > 0:
                    # 应用汇的过滤器
                    if flow['sink'] in config["sinks"]:
                        filtered[page].append(flow)
        # 删除空的条目
        if len(filtered[page]) == 0:
            filtered.pop(page)
    return filtered

def analyze_worker(app_path, page_path, results_path, config, queue):
    print("start analyze worker")
    # 首先生成 PDG（程序依赖图）
    # r = gen_pdg(os.path.join(app_path, "pages", f"{page_path}.js"), results_path)
    r = gen_pdg(os.path.normpath(os.path.join(app_path, "pages", f"{page_path}.js")), results_path)
    # 初始化共享存储（每个进程一个）
    Storage.init(r, app_path, page_path, config)
    # 分析双向绑定
    # handle_wxml(os.path.join(app_path, "pages", f"{page_path}.wxml"))
    handle_wxml(os.path.normpath(os.path.join(app_path, "pages", f"{page_path}.wxml")))
    # 分析数据流
    handle_wxjs(r)
    # 检索结果
    results = Storage.get_instance().get_results()
    print("result:",results)
    # 过滤结果
    filtered = filter_results(results, config)
    # 发送结果
    queue.put(filtered)
    print("output:",filtered)

def analyze_listener(result_path, queue):
    # 监听工作进程的结果，并将结果写入文件
    with open(result_path, "w") as f:
        f.write("page_name | page_method | ident | source | sink\n")
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

"""
从文件列表中提取有效的页面名称。

参数:
files (list): 文件名列表。

返回:
set: 有效页面名称的集合。
"""
def obtain_valid_page(files):
    # 从文件列表中提取有效的页面名称
    sub_pages = set()
    for f in files:
        sub_pages.add(str.split(f, ".")[0])
    for f in list(sub_pages):
        if f"{f}.js" not in files or f"{f}.wxml" not in files:
            print("Remove ",f)
            sub_pages.remove(f)
    return sub_pages

"""
从应用路径中检索所有有效的页面。
参数:
app_path (str): 应用路径。
返回:
set: 在应用中找到的所有有效页面的集合。
"""
def retrieve_pages(app_path):
    # 从应用路径中检索所有有效的页面
    pages = set()
    print("app_path:",app_path)
    # for root, dirs, files in os.walk(os.path.join(app_path, "pages/")):
    #     print("files:",files)
    #     for s in obtain_valid_page(files):
    #         pages.add(f"{root[len(os.path.join(app_path, 'pages/')):]}/{s}")
    for root, dirs, files in os.walk(os.path.normpath(os.path.join(app_path, "pages/"))):
        print("files:", files)
        for s in obtain_valid_page(files):
            pages.add(f"{root[len(os.path.normpath(os.path.join(app_path, 'pages/'))):]}/{s}")
    return pages

def analyze_mini_program(app_path, results_path, config, workers, bench):
    if bench:
        print("bench",bench)
    else:
        print("no bench")
    # 分析整个小程序的数据流
    if not os.path.exists(app_path):
        print("[main] 无效的应用路径")

    # 获取所有页面
    pages = retrieve_pages(app_path)
    if len(pages) == 0:
        print(f"[main] 未找到页面")
        return

    # 准备输出路径
    if not os.path.exists(results_path):
        os.mkdir(results_path)
    elif os.path.isfile(results_path):
        print(f"[main] 错误: 无效的输出路径")
        return

    manager = mp.Manager()
    queue = manager.Queue()
    pool = mp.Pool(workers if workers is not None else mp.cpu_count())

    # 将监听器放入池中
    # pool.apply_async(analyze_listener, (os.path.join(results_path, f"{os.path.basename(app_path)}-result.csv"), queue))
    pool.apply_async(analyze_listener, (os.path.normpath(os.path.join(results_path, f"{os.path.basename(app_path)}-result.csv")), queue))

    bench_out = None
    if bench:
        bench_out = open(os.path.join(results_path, f"{os.path.basename(app_path)}-bench.csv"), "w")
        bench_out.write("page|start|end\n")

    # 执行工作进程
    workers = dict()
    for p in pages:
        try:
            workers[p] = dict()
        except Exception as e:
            print(f"Error creating dictionary for {p}: {e}")
        # 异步执行analyze_worker函数。
        # 将app_path, p, results_path, config, queue作为参数传递给analyze_worker函数，并将返回的异步结果对象存储在workers[p]["job"]中。
        # 这意味着analyze_worker函数将在后台以异步方式运行，并且可以通过workers[p]["job"]来获取结果或状态。
        try:
            workers.setdefault(p, {}).setdefault("job", pool.apply_async(analyze_worker, (app_path, p, results_path, config, queue)))
        except Exception as e:
            print(f"Error setting default value for 'job' in dictionary for {p}: {e}")
        if bench:
            workers[p]["begin_time"] = int(time.time())

    # 收集结果
    for p in pages:
        try:
            # 获取异步任务的结果
            workers[p]["job"].get()
        except Exception as e:
            # 尝试给一个不可写属性赋值时，can't set attribute
            print("bench",bench)
            print(f"[main] 严重错误: {e}")
            # print(config["sinks"])
        finally:
            if bench:
                workers[p]["end_time"] = int(time.time())
    
    print("kill")
    queue.put("kill")
    pool.close()
    pool.join()

    # 记录基准测试结果
    if bench and bench_out is not None:
        for p in pages:
            bench_out.write(f"{p}|{workers[p]['begin_time']}|{workers[p]['end_time']}\n")
        bench_out.close()
