def is_trees_synchronized(tree1, tree2):
    if not tree1:
        return [True, ""]
    if tree1["value"] != tree2["value"]:
        return [False, tree1["value"]]

    a = is_trees_synchronized(tree1.get("left"), tree2.get("right"))[0]
    b = a and is_trees_synchronized(tree1.get("right"), tree2.get("left"))[0]

    return [a and b, tree1["value"]]
