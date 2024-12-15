import unittest
from day01 import prepare_gifts


class TestPrepareGifts(unittest.TestCase):
    def test_prepare_gifts(self):
        self.assertEqual(prepare_gifts([3, 1, 2, 3, 4, 2, 5]), [1, 2, 3, 4, 5])


if __name__ == "__main__":
    unittest.main()
