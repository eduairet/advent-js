import unittest
from day14 import min_moves_to_stables


class TestMinMovesToStables(unittest.TestCase):
    def test_min_moves_to_stables(self):
        self.assertEqual(min_moves_to_stables([2, 6, 9], [3, 8, 5]), 3)
        self.assertEqual(min_moves_to_stables([1, 1, 3], [1, 8, 4]), 8)


if __name__ == "__main__":
    unittest.main()
