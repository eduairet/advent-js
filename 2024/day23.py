def find_missing_numbers(nums):
    nums_set = set(nums)
    return [i for i in range(1, max(nums_set) + 1) if i not in nums_set]
