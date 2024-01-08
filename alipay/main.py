import json
from taint_mini import taintmini
import argparse
import os

def main():
    # 创建解析命令行参数的对象
    parser = argparse.ArgumentParser(prog="taint-mini",
                                     formatter_class=argparse.RawTextHelpFormatter)

    # 添加命令行参数
    parser.add_argument("-i", "--input", dest="input", metavar="path", type=str, required=True,
                        help="输入迷你程序的路径。"
                             "可以是单个迷你程序目录或索引文件。")
    parser.add_argument("-o", "--output", dest="output", metavar="path", type=str, default="results",
                        help="输出结果的路径。"
                             "结果文件将存储在迷你程序目录之外。")
    parser.add_argument("-c", "--config", dest="config", metavar="path", type=str,
                        help="配置文件的路径。"
                             "参见默认配置文件的示例。留空以包含所有结果。")
    parser.add_argument("-j", "--jobs", dest="workers", metavar="number", type=int, default=None,
                        help="工作进程的数量。")
    parser.add_argument("-b", "--bench", dest="bench", action="store_true",
                        help="启用基准数据日志。"
                             "默认值: False")

    # 解析命令行参数
    args = parser.parse_args()
    input_path = args.input
    output_path = args.output
    config_path = args.config
    workers = args.workers
    bench = args.bench
    config = None

    # 测试配置
    if config_path is None:
        # 如果未提供配置，包含所有源和汇
        config = dict()
    else:
        try:
            # 尝试加载配置文件
            config = json.load(open(config_path))
        except FileNotFoundError:
            print(f"[main] 错误: 找不到配置文件")
            exit(-1)

    # 测试输入路径
    if os.path.exists(input_path):
        if os.path.isfile(input_path):
            # 处理索引文件
            with open(input_path) as f:
                for i in f.readlines():
                    taintmini.analyze_mini_program(str.strip(i), output_path, config, workers, bench)
        elif os.path.isdir(input_path):
            # 处理单个迷你程序
            taintmini.analyze_mini_program(input_path, output_path, config, workers, bench)
    else:
        print(f"[main] 错误: 无效的输入路径")

if __name__ == "__main__":
    main()
