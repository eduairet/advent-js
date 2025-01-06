def is_trees_synchronized(tree1, tree2):
    if tree1["value"] != tree2["value"]:
        return [False, tree1["value"]]
    if "left" in tree1:
        left_sync, _ = is_trees_synchronized(tree1["left"], tree2["right"])
        right_sync, _ = is_trees_synchronized(tree1["right"], tree2["left"])
        return [left_sync and right_sync, tree1["value"]]
    return [True, tree1["value"]]
