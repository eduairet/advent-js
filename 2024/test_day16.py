import unittest
from day16 import remove_snow


class TestRemoveSnow(unittest.TestCase):
    def test_remove_snow(self):
        self.assertEqual(remove_snow("zxxzoz"), "oz")
        self.assertEqual(remove_snow("abcdd"), "abc")
        self.assertEqual(remove_snow("zzz"), "z")
        self.assertEqual(remove_snow("a"), "a")


if __name__ == "__main__":
    unittest.main()
