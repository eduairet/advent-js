import re


def is_robot_back(moves):
    x, y = [0, 0]
    moves = re.findall(r"[*!?]?[RLUD]", moves)

    directions = {
        "R": (1, 0),
        "L": (-1, 0),
        "U": (0, 1),
        "D": (0, -1),
    }
    inverses = {"R": "L", "L": "R", "U": "D", "D": "U"}

    for i, move in enumerate(moves):
        prefix = move[0] if len(move) == 2 else None
        direction = move[1] if prefix else move

        if prefix == "*":
            x += directions[direction][0] * 2
            y += directions[direction][1] * 2
        elif prefix == "!":
            inverted = inverses[direction]
            x += directions[inverted][0]
            y += directions[inverted][1]
        elif prefix == "?":
            is_done_before = any(map(lambda m: direction in m, moves[:i]))
            x += 0 if is_done_before else directions[direction][0]
            y += 0 if is_done_before else directions[direction][1]
        else:
            x += directions[direction][0]
            y += directions[direction][1]

    result = True if x == 0 and y == 0 else [x, y]
    return result
