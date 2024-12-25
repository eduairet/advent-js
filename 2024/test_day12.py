import unittest
from day12 import calculate_price


class TestCalculatePrice(unittest.TestCase):
    def test_calculate_price(self):
        self.assertEqual(calculate_price("***"), 3)
        self.assertEqual(calculate_price("*o"), 4)
        self.assertEqual(calculate_price("@@@"), 300)
        self.assertEqual(calculate_price("#@Z"), None)


if __name__ == "__main__":
    unittest.main()
