def organizeShoes(shoes):
    counts = {}
    for shoe in shoes:
        size = shoe["size"]
        if size not in counts:
            counts[size] = {"I": 0, "R": 0}
        counts[size][shoe["type"]] += 1

    result = []
    for size, types in counts.items():
        pairs = min(types["I"], types["R"])
        result.extend([size] * pairs)

    return sorted(result)
