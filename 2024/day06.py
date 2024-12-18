def in_box(box):
    is_top_valid = box[0].count("#") == len(box[0])
    is_bottom_valid = box[-1].count("#") == len(box[-1])

    if not is_top_valid and not is_bottom_valid:
        return False

    has_gift = False

    for i in range(1, len(box) - 1):
        if box[i][0] != "#" or box[i][-1] != "#":
            return False
        if "*" in box[i]:
            has_gift = True

    return has_gift
