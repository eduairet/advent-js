import unittest
from day17 import detect_bombs


class TestDetectBombs(unittest.TestCase):
    def test_detect_bombs(self):
        grid = [[True, False, False], [False, True, False], [False, False, False]]
        self.assertEqual(detect_bombs(grid), [[1, 2, 1], [2, 1, 1], [1, 1, 1]])


if __name__ == "__main__":
    unittest.main()
