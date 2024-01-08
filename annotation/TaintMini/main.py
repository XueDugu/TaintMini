import json
from taint_mini import taintmini
import argparse
import os

# 主函数
def main():
    # 获取命令行指令，在对应指令时触发。
    # [创建命令行解析器，argparse.RawTextHelpFormatter 是一种帮助消息格式，它保留文本中的空白和换行符，以保持原始文本的格式。]
    parser = argparse.ArgumentParser(prog="taint-mini",
                                     formatter_class=argparse.RawTextHelpFormatter)

    # 解析-i命令，导入路径，读取的类型是string类型，读入到变量input中，并且是必须的，help应该是-h时打印的内容，格式是路径格式。
    # ["--input"代表长标志。用户可以选择使用短标志（-i）或长标志（--input）来指定参数。metavar="path"是在帮助消息（-h）中使用的变量名，用于描述参数的预期输入类型。]
    parser.add_argument("-i", "--input", dest="input", metavar="path", type=str, required=True,
                        help="path of input mini program(s)."
                             "Single mini program directory or index files will both be fine.")
    # 输出路径，default应该是运行失败后打印的内容。
    # [default="results"是参数的默认值。如果用户未在命令行中提供该参数，解析器将使用默认值。]
    parser.add_argument("-o", "--output", dest="output", metavar="path", type=str, default="results",
                        help="path of output results."
                             "The output file will be stored outside of the mini program directories.")
    # 配置文件
    parser.add_argument("-c", "--config", dest="config", metavar="path", type=str,
                        help="path of config file."
                             "See default config file for example. Leave the field empty to include all results.")
    parser.add_argument("-j", "--jobs", dest="workers", metavar="number", type=int, default=None,
                        help="number of workers.")
    # action应该是一个函数名，应该是如果有-b就会运行这个函数。
    # [action="store_true"表示如果用户在命令行中提供了 -b 或 --bench，则参数值将被设置为 True，否则将为 False。store_true 操作会在标志出现时将相应属性设置为 True。]
    parser.add_argument("-b", "--bench", dest="bench", action="store_true",
                        help="enable benchmark data log."
                             "Default: False")

    # 类似于C的argv，包含所有的命令行参数。
    args = parser.parse_args()
    # 根据变量名具体解析出每个参数的值。
    input_path = args.input
    output_path = args.output
    config_path = args.config
    workers = args.workers
    bench = args.bench

    # 配置文件
    config = None
    # 无指定配置文件
    if config_path is None:
        # 配置文件是一个空的字典
        config = dict()
    else:
        try:
            # 用JSON格式载入配置文件
            config = json.load(open(config_path))
        except FileNotFoundError:
            print(f"[main] error: config not found")
            exit(-1)

    # 如果能找得到路径存在
    if os.path.exists(input_path):
        # 如果导入路径是个文件
        if os.path.isfile(input_path):
            # 打开导入路径的文件
            with open(input_path) as f:
                # 逐行读入
                for i in f.readlines():
                    # 逐行进行污点分析
                    taintmini.analyze_mini_program(str.strip(i), output_path, config, workers, bench)
        # 如果导入路径是个文件夹
        elif os.path.isdir(input_path):
            # 对文件夹进行污点分析
            taintmini.analyze_mini_program(input_path, output_path, config, workers, bench)
    else:
        print(f"[main] error: invalid input path")


if __name__ == "__main__":
    main()
