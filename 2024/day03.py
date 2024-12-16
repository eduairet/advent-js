from collections import defaultdict


def organizeInventory(inventory):
    result = defaultdict(lambda: defaultdict(int))
    for item in inventory:
        result[item["category"]][item["name"]] += item["quantity"]
    return {category: dict(items) for category, items in result.items()}
