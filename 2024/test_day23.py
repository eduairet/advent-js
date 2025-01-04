import unittest
from day23 import find_missing_numbers


class TestFindMissingNumbers(unittest.TestCase):
    def test_find_missing_numbers(self):
        self.assertEqual(find_missing_numbers([1, 2, 4, 6]), [3, 5])
        self.assertEqual(find_missing_numbers([4, 8, 7, 2]), [1, 3, 5, 6])
        self.assertEqual(find_missing_numbers([3, 2, 1, 1]), [])
        self.assertEqual(find_missing_numbers([5, 5, 5, 3, 3, 2, 1]), [4])


if __name__ == "__main__":
    unittest.main()
