def distribute_weight(weight):
    box_sizes = {
        1: [" _ ", "|_|"],
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"],
    }

    stack_sizes = {
        3: box_sizes[1][:-1] + ["|_|_"] + [box_sizes[2][1]],
        4: [box_sizes[2][0], box_sizes[2][1], box_sizes[2][1]],
        6: box_sizes[1][:-1] + ["|_|___"] + box_sizes[5][1:],
        7: box_sizes[2][:-1] + ["|___|_"] + box_sizes[5][1:],
        8: box_sizes[1][:-1] + ["|_|_", "|___|_"] + box_sizes[5][1:],
        9: box_sizes[2] + [box_sizes[2][1] + "_"] + box_sizes[5][1:],
    }

    def build_stack(w):
        if w in stack_sizes:
            return stack_sizes[w]
        elif w in box_sizes:
            return box_sizes[w]
        elif w > 10:
            base, rem = divmod(w, 10)
            top = build_stack(rem)
            bottom = box_sizes[10][1:] * base
            if top:
                top[-1] = top[-1].ljust(10, "_")
            else:
                top = [box_sizes[10][0]]
            return top + bottom
        return []

    result = "\n".join(line for line in build_stack(weight))
    return result
