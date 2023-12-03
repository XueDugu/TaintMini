import multiprocessing as mp

class Storage:
    node = None
    results = None
    app_path = None
    page_path = None
    config = None

    def __init__(self, _node, _app_path, _path_path, _config):
        self.node = _node
        # 使用 Manager 中的 dict 以便在进程间共享
        self.results = mp.Manager().dict()
        self.app_path = _app_path
        self.page_path = _path_path
        self.config = _config
        print("init1")

    def get_node(self):
        return self.node

    def get_results(self):
        return self.results

    def get_app_path(self):
        return self.app_path

    def get_page_path(self):
        return self.page_path

    def get_config(self):
        return self.config

    @staticmethod
    def init(_node, _app_path, _page_path, _config):
        Storage.node = _node
        Storage.app_path = _app_path
        Storage.page_path = _page_path
        Storage.config = _config
        print("init2")

    @staticmethod
    def get_instance():
        return Storage(Storage.node, Storage.app_path, Storage.page_path, Storage.config)
