from collections import deque
from pdg_js import node as _node
from pdg_js.build_pdg import get_data_flow
from .storage import Storage

# 生成数据流图
def gen_pdg(file_path, results_path):
    # 调用get_data_flow生成数据流图，并保存在results_path/intermediate-data
    return get_data_flow(file_path, benchmarks=dict(), alt_json_path=f"{results_path}/intermediate-data/")

# 处理js代码
def handle_wxjs(r):
    # 获取数据流
    results = Storage.get_instance().get_results()
    # 利用列表存储
    results[Storage.get_instance().get_page_path()] = list()
    # 产生数据点
    find_page_methods_node(r)

# 产生数据点
def find_page_methods_node(r):
    # 遍历数据流图
    for child in r.children:
        # 判断数据流图的节点是不是"ExpressionStatement"
        # [检查当前节点的类型是否是 "ExpressionStatement"，即表达式语句。]
        if child.name == "ExpressionStatement":
            # [检查当前节点的子节点是否有长度大于零，第一个子节点是否是 "CallExpression"，并且该调用表达式的第一个子节点的属性 "name" 是否为 "Page"。这个条件是在寻找调用了名为 "Page" 的函数的代码块。]
            if len(child.children) > 0 \
                    and child.children[0].name == "CallExpression" \
                    and child.children[0].children[0].attributes["name"] == "Page":
                # [遍历找到的调用表达式的子节点，这里假设调用表达式的第二个子节点（索引为1）是一个包含多个子节点的列表，每个子节点都代表一个方法。]]
                for method_node in child.children[0].children[1].children:
                    # [检查每个方法节点是否是函数表达式。]
                    if method_node.attributes["value"]["type"] == "FunctionExpression":
                        # [获取方法的名称，假设该方法是通过一个标识符来定义的。]
                        method_name = method_node.children[0].attributes['name']
                        # 打印方法名称
                        print(
                            f"[page method] got page method, method name: {method_name}")
                        try:
                            # [对方法节点进行深度优先搜索。]
                            dfs_search(method_node, method_name)
                        except Exception as e:
                            print(f"[wxjs] error in searching method {method_name}: {e}")

# [根据代码中指定的条件找到AST中代表CallExpression的最近祖先节点。它递归地导航AST，检查沿途的每个节点，直到找到匹配的节点或达到AST的根部。]
def find_nearest_call_expr_node(node):
    return node if node is not None and \
                   hasattr(node, "name") and isinstance(node, _node.ValueExpr) and node.name == "CallExpression" \
                   else find_nearest_call_expr_node(node.parent if node.parent is not None else None)


def obtain_callee_from_call_expr(node):
    # 如果节点的为空或节点的名字不是Page就返回节点名字
    # [检查node的第一个子节点是否没有子节点且其名称不是"Page",返回第一个子节点的名称。]
    if len(node.children[0].children) == 0 and node.children[0].attributes["name"] != "Page":
        return node.children[0].attributes["name"]
    # 返回如果节点有路径名字就用.连接路径名字否则直接返回节点名字
    # [返回第一个子节点的所有子节点名称以点号分隔的字符串。]
    return ".".join([i.attributes["name"] if "name" in i.attributes else "" for i in node.children[0].children])

# ".".join()应该就是将参数用.连接起来返回连接后的整体
# [获取node的第一个子节点的每个子节点的name属性。这些名称用句点连接在一起，并作为一个字符串返回。]
def obtain_var_decl_callee(node):
    return ".".join([i.attributes["name"] for i in node.children[0].children])

# [使用列表推导来遍历node的children，并从每个子节点中提取"name"属性。]
def obtain_value_expr_callee(node):
    return ".".join([i.attributes["name"] for i in node.children])

# 判断函数是否会被调用，会被调用才有CallExpression的父节点
# [检查 dep.extremity 的父节点是否是 _node.ValueExpr 的实例，如果是，则使用 dep.extremity.parent 的第一个子节点作为参数调用另一个名为 obtain_value_expr_callee 的函数。否则，返回 None。]
def obtain_data_flow_sink(dep):
    # check if the dependence node has CallExpression parent
    if isinstance(dep.extremity.parent, _node.ValueExpr):
        return obtain_value_expr_callee(dep.extremity.parent.children[0])
    return None

# 
def handle_data_parent_node(node):
    # 获取节点的源
    source = check_immediate_data_dep_parent(node)
    # 如果节点没有源
    if source is None:
        # 找到最近有调用的节点
        call_expr_node = find_nearest_call_expr_node(node)
        # 获取最近有调用的节点的源用于报错
        source = obtain_callee_from_call_expr(call_expr_node)
        print(f"[taint source] got nearest callee (source): {source}")
    
    sink = []
    # 遍历子节点获取节点的汇
    for child in node.data_dep_children:
        # 通过查找名字获得汇
        s = obtain_callee_from_call_expr(find_nearest_call_expr_node(child.extremity))
        if s is not None:
            print(f"[taint sink] got data flow sink: {s}")
            sink.append(s)

    print(f"[flow path] data identifier: {node.attributes['name']}, "
          f"from source: {source if source is not None else 'None'}, "
          f"to sink: {','.join(map(str, sink))}")

# [检查 node 的父级是否是 _node.Node 类的实例，并且是否具有 name 属性。检查父级的名称是否为 "VariableDeclarator" 或 "AssignmentExpression"。如果所有这些条件都满足，则函数返回 True。]
def is_parent_var_decl_or_assign_expr(node):
    return isinstance(node.parent, _node.Node) and \
           hasattr(node.parent, "name") and \
           (node.parent.name == "VariableDeclarator" or node.parent.name == "AssignmentExpression")

# 获取节点的源
# [检查node的父节点是否是变量声明或者赋值表达式。如果是，它进一步检查父节点是否有其他子节点，并且第二个子节点是否是值表达式。如果满足这些条件，它检查第二个子节点是否是调用函数的表达式。如果是，它从调用函数的参数中获取源。如果无法从调用函数中获取源，它会从赋值表达式本身获取源。函数返回获取到的源。]
def check_immediate_data_dep_parent(node):
    source = None
    # 判断父节点是否是变量声明或者赋值表达式
    if is_parent_var_decl_or_assign_expr(node):
        # 判断节点是否有其他子节点并判断节点是否是赋值表达式
        if len(node.parent.children) > 1 and isinstance(node.parent.children[1], _node.ValueExpr):
            # 判断节点是否是调用函数
            if hasattr(node.parent.children[1], "name") and node.parent.children[1].name == "CallExpression":
                # 通过获取调用函数的参数获取源
                source = obtain_callee_from_call_expr(node.parent.children[1])

            # 判断是否成功获取到了源，即判断节点是否是调用函数
            if source is None:
                # 通过赋值表达式获取源
                source = obtain_var_decl_callee(node.parent.children[1])
            print(f"[taint source] got data flow source: {source}, identifier: {node.attributes['name']}")
    return source

# [检查 node 是否是 _node.Identifier 的实例。如果不是，则函数返回 False。代码尝试访问 node 的父节点，并检查第四个父节点的第一个子节点的 name 属性是否等于 "Page"。如果是，则函数返回 True。如果在此过程中出现任何异常（例如索引错误、属性错误或键错误），函数也会返回 False。]
def is_page_method_parameter(node):
    # 检查节点是否是 _node.Identifier 的实例
    if not isinstance(node, _node.Identifier):
        return False
    try:
        if node.parent.parent.parent.parent \
                .children[0].attributes["name"] == "Page":
            return True
    except IndexError:
        return False
    except AttributeError:
        return False
    except KeyError:
        return False

# [检查value是否为字符串，并且检查value中是否包含子字符串"detail.value"。如果两个条件都为真，则返回在value中最后一个"."出现之后的子字符串。]
def get_input_name(value):
    return value[value.rindex(".") + 1:] if isinstance(value, str) and "detail.value" in value else None

# [首先检查node和_n是否都是_node.Identifier类的实例。如果不是，则返回None。然后，它创建了一个名为sources的空集合。接下来，它检查node.value的类型。如果它是一个字典，函数会迭代字典的键。如果相应的值是一个包含子字符串"detail.value"的字符串，并且从中提取的输入名称存在于_n.attributes["double_binding_values"]字典中，它会将一个格式化的字符串添加到sources集合中。如果node.value是一个包含子字符串"detail.value"的字符串，并且从中提取的输入名称存在于_n.attributes["double_binding_values"]字典中，它也会将一个格式化的字符串添加到sources集合中。如果没有找到任何数据源，函数会将一个回退的数据源添加到sources集合中。最后，函数将sources集合返回。请注意，这个解释是基于提供的代码段，可能无法捕捉到代码的全部上下文或功能。]
def handle_page_method_parameter(node, _n):
    # 检查node和_n是否都是_node.Identifier类的实例
    if not isinstance(node, _node.Identifier) or not isinstance(_n, _node.Identifier):
        return None
    sources = set()
    if isinstance(node.value, dict):
        for i in node.value:
            if isinstance(node.value[i], str) and "detail.value" in node.value[i]:
                input_name = get_input_name(node.value[i])
                if input_name is None or input_name not in _n.attributes["double_binding_values"]:
                    continue
                sources.add(f"[data from double binding: {input_name}, "
                            f"type: {_n.attributes['double_binding_values'][input_name]}]")
    elif isinstance(node.value, str) and "detail.value" in node.value:
        input_name = get_input_name(node.value)
        if input_name is not None and input_name in _n.attributes["double_binding_values"]:
            sources.add(f"[data from double binding: {input_name}, "
                        f"type: {_n.attributes['double_binding_values'][input_name]}]")

    # if no double binding found, fall back to general resolve
    if len(sources) == 0:
        sources.add(f"[data from page parameter: {node.value}]")
    return sources


def handle_data_dep_parents(node):
    """
    @return set of sources
    """
    # check immediate data dep parent node first
    source = check_immediate_data_dep_parent(node)
    if source is not None:
        return {source}

    # no source found, fall back to general search
    source = obtain_callee_from_call_expr(find_nearest_call_expr_node(node))
    if source is not None and source != "":
        return {source}

    sources = set()
    # no call expr found, search from provenance parents
    for n in node.provenance_parents_set:
        # check ident
        if isinstance(n, _node.Identifier):
            # check if it's page method parameter first
            if is_page_method_parameter(n):
                # is page method parameter, handle double binding
                # notice here should analyze the original node,
                # not the provenance parent node
                r = handle_page_method_parameter(node, n)
                if r is not None:
                    sources.update(r)
                continue

            # search for source from var decl or assignment expr
            r = check_immediate_data_dep_parent(n)
            if r is None:
                # no results found, fall back to general search
                r = obtain_callee_from_call_expr(find_nearest_call_expr_node(n))

            # still no results
            if r is None or r == "":
                continue
            # found source, add to set
            sources.add(r)
        # normal node, don't handle it
        if isinstance(n, _node.Node):
            continue
        # value expr, don't handle it
        if isinstance(n, _node.ValueExpr):
            continue
    # end for
    return sources


def handle_data_child_node(node, method_name):
    if hasattr(node, "data_dep_children") and len(node.data_dep_children) > 0:
        # this node has data dep children (intermediate node), won't handle it
        return

    # no more children, it's the last node of the data flow
    # resolve sink api if the parent node is call expr
    sink = obtain_callee_from_call_expr(find_nearest_call_expr_node(node))
    if sink == "":
        print(f"[taint sink] no sink api resolved, passing...")
        return
    print(f"[taint sink] got data flow sink: {sink}, resolving data flow source")

    # resolve data source
    sources = set()
    data_dep_parent_nodes = node.data_dep_parents
    for n in data_dep_parent_nodes:
        s = handle_data_dep_parents(n.extremity)
        if s is not None:
            sources.update(s)

    if len(sources):
        print(f"[taint source] resolve data sources: {', '.join(sources)}")
    else:
        print(f"[taint source] no valid source found")

    # flow path
    if len(sources):
        print(f"[flow path] data identifier: {node.attributes['name']}, "
              f"from source: {', '.join(sources)}, "
              f"to sink: {sink}")
        results = Storage.get_instance().get_results()
        for s in sources:
            results[Storage.get_instance().get_page_path()].append({
                "method": method_name,
                "ident": node.attributes['name'],
                "source": s,
                "sink": sink
            })


def handle_identifier_node(node, method_name):
    # if hasattr(node, "data_dep_children") and len(node.data_dep_children) > 0:
    #     print("[handle ident] got data flow parent node")
    #     handle_data_parent_node(node)

    # search backwards (from children)
    if hasattr(node, "data_dep_parents") and len(node.data_dep_parents) > 0:
        print("[handle ident] got data flow child node")
        # omit backwards search
        handle_data_child_node(node, method_name)


def dfs_visit(node, method_name):
    if not isinstance(node, _node.Identifier):
        # print("normal node, passing")
        return

    handle_identifier_node(node, method_name)


def dfs_search(r, n):
    stack = deque()
    stack.append(r)

    visited = []

    while stack:
        v = stack.pop()
        if v in visited:
            continue

        # node is not visited
        visited.append(v)
        dfs_visit(v, n)

        # visit its children
        children = v.children
        for i in reversed(children):
            if i not in visited:
                stack.append(i)
