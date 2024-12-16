def create_xmas_tree(height, ornament):
    result = ""

    for i in range(height):
        filler = "_" * (height - i - 1)
        result += f"{filler}{ornament * (2 * i + 1)}{filler}\n"

    tree_row = "#".center(2 * height - 1, "_")

    return f"{result}{tree_row}\n{tree_row}"
