import os
import time
from .wxjs import gen_pdg, handle_wxjs
from .wxml import handle_axml
from .storage import Storage
import multiprocessing as mp

def filter_results(results, config):
    # 如果没有sources，直接返回结果
    if ("sources" not in config or len(config["sources"]) == 0) and \
            ("sinks" not in config or len(config["sinks"]) == 0):
        return results

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
    # 首先生成 PDG（程序依赖图）
    r = gen_pdg(os.path.join(app_path, "pages", f"{page_path}.js"), results_path)
    # 初始化共享存储（每个进程一个）
    Storage.init(r, app_path, page_path, config)
    # 分析双向绑定
    handle_axml(os.path.join(app_path, "pages", f"{page_path}.axml"))
    # 分析数据流
    handle_wxjs(r)
    # 检索结果
    results = Storage.get_instance().get_results()
    # 过滤结果
    filtered = filter_results(results, config)
    # 发送结果
    queue.put(filtered)

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

def obtain_valid_page(files):
    # 从文件列表中提取有效的页面名称
    sub_pages = set()
    for f in files:
        sub_pages.add(str.split(f, ".")[0])
    for f in list(sub_pages):
        if f"{f}.js" not in files or f"{f}.axml" not in files:
            sub_pages.remove(f)
    return sub_pages

def retrieve_pages(app_path):
    # 从应用路径中检索所有有效的页面
    pages = set()
    for root, dirs, files in os.walk(os.path.join(app_path, "pages/")):
        for s in obtain_valid_page(files):
            pages.add(f"{root[len(os.path.join(app_path, 'pages/')):]}/{s}")
    return pages

def analyze_mini_program(app_path, results_path, config, workers, bench):
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
    pool.apply_async(analyze_listener, (os.path.join(results_path, f"{os.path.basename(app_path)}-result.csv"), queue))

    bench_out = None
    if bench:
        bench_out = open(os.path.join(results_path, f"{os.path.basename(app_path)}-bench.csv"), "w")
        bench_out.write("page|start|end\n")

    # 执行工作进程
    workers = dict()
    for p in pages:
        workers[p] = dict()
        workers[p]["job"] = pool.apply_async(analyze_worker, (app_path, p, results_path, config, queue))
        if bench:
            workers[p]["begin_time"] = int(time.time())

    # 收集结果
    for p in pages:
        try:
            workers[p]["job"].get()
        except Exception as e:
            print(f"[main] 严重错误: {e}")
        finally:
            if bench:
                workers[p]["end_time"] = int(time.time())

    queue.put("kill")
    pool.close()
    pool.join()

    # 记录基准测试结果
    if bench and bench_out is not None:
        for p in pages:
            bench_out.write(f"{p}|{workers[p]['begin_time']}|{workers[p]['end_time']}\n")
        bench_out.close()
