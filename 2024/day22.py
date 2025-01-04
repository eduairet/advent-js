def generate_gift_sets(gifts):
    result = []

    def combine(start, path):
        if path:
            result.append(path)
        for i in range(start, len(gifts)):
            combine(i + 1, path + [gifts[i]])

    combine(0, [])
    result.sort(key=len)
    return result
