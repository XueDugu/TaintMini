import multiprocessing as mp

class SharedData:
    shared_list = None

    def __init__(self):
        # 使用 Manager 中的 list 以便在进程间共享
        self.shared_list = mp.Manager().list()

    def add_data(self, data):
        self.shared_list.append(data)

def worker(shared_data, data):
    shared_data.add_data(data)

if __name__ == "__main__":
    shared_data = SharedData()

    # 创建两个进程，每个进程调用 worker 函数
    process1 = mp.Process(target=worker, args=(shared_data, "Process 1 data"))
    process2 = mp.Process(target=worker, args=(shared_data, "Process 2 data"))

    # 启动进程
    process1.start()
    process2.start()

    # 等待进程结束
    process1.join()
    process2.join()

    # 打印共享列表的内容
    print("Shared List:", shared_data.shared_list)
