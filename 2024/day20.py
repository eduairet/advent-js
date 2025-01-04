from collections import Counter


def fix_gift_list(received: list[str], expected: list[str]) -> dict[str, int]:
    received_count = Counter(received)
    expected_count = Counter(expected)
    return {
        "missing": expected_count - received_count,
        "extra": received_count - expected_count,
    }
