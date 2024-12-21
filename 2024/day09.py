from typing import List, Literal


def move_train(
    board: List[str], mov: Literal["U", "D", "R", "L"]
) -> Literal["none", "crash", "eat"]:
    for row in board:
        if "@" in row:
            x, y = row.index("@"), board.index(row)
            break

    position_changes = {
        "U": (-1, 0, y - 1 < 0),
        "D": (1, 0, y + 1 > len(board) - 1),
        "R": (0, 1, x + 1 > len(board[y]) - 1),
        "L": (0, -1, x - 1),
    }
    mov_x, mov_y, crash = position_changes[mov]

    if crash or board[y + mov_x][x + mov_y] == "o":
        return "crash"

    if board[y + mov_x][x + mov_y] == "*":
        return "eat"

    return "none"


BOARD = ["·····", "*····", "@····", "o····", "o····"]
move_train(BOARD, "U")
