def distribute_weight(weight):
    box_sizes = {
        1: [" _ ", "|_|"],
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"],
    }

    if weight in box_sizes:
        return "\n".join([line.rstrip() for line in box_sizes[weight]])

    stack_sizes = {
        3: [box_sizes[1][0], f"{box_sizes[1][1]}_", box_sizes[2][1]],
        4: [box_sizes[2][0], box_sizes[2][1], box_sizes[2][1]],
        6: [box_sizes[1][0], f"{box_sizes[1][1]}___", box_sizes[5][1], box_sizes[5][2]],
        7: [box_sizes[2][0], f"{box_sizes[2][1]}_", box_sizes[5][1], box_sizes[5][2]],
        8: [
            box_sizes[1][0],
            f"{box_sizes[1][1]}_",
            f"{box_sizes[2][1]}_",
            box_sizes[5][1],
            box_sizes[5][2],
        ],
        9: [
            box_sizes[2][0],
            box_sizes[2][1],
            f"{box_sizes[2][1]}_",
            box_sizes[5][1],
            box_sizes[5][2],
        ],
    }

    result = []

    def build_stack(w):
        if w in stack_sizes:
            return stack_sizes[w]
        elif w in box_sizes:
            return box_sizes[w]
        elif w > 10:
            base_boxes = w // 10
            top = build_stack(w - base_boxes * 10)
            bottom = []
            for _ in range(base_boxes):
                bottom.extend(box_sizes[10][1:])
            return (
                [*top[:-1], top[-1].ljust(10, "_"), *bottom]
                if top
                else [box_sizes[10][0], *bottom]
            )

    result = build_stack(weight)

    return "\n".join([line.rstrip() for line in result])
