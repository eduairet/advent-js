def draw_race(indices, length):
    lanes = len(indices)

    result = []
    for i in range(lanes):
        lane = "~" * length

        if indices[i] != 0:
            index = indices[i] if indices[i] >= 0 else length + indices[i]
            lane = f"{lane[:index]}r{lane[index + 1 :]}"

        result.append(f"{' ' * (lanes - 1 - i)}{lane} /{i+1}")

    return "\n".join(result)

