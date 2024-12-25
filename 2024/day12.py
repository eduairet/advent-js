import re


def calculate_price(ornaments):
    prices = {
        "*": 1,
        "o": 5,
        "^": 10,
        "#": 50,
        "@": 100,
    }

    if not re.match(r"^[*o^#@]+$", ornaments):
        return None

    n = len(ornaments)
    result = 0
    for i in range(n):
        current = ornaments[i]
        next = ornaments[i + 1] if i + 1 < n else None
        factor = -1 if i < n - 1 and prices[current] < prices[next] else 1
        result += prices[current] * factor
    return result
