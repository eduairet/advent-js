import unittest
from day08 import draw_race


class TestDrawRace(unittest.TestCase):
    def test_draw_race(self):
        self.assertEqual(
            draw_race([0, 5, -3], 10), "  ~~~~~~~~~~ /1\n ~~~~~r~~~~ /2\n~~~~~~~r~~ /3"
        )
        self.assertEqual(
            draw_race([2, -1, 0, 5], 8),
            "   ~~r~~~~~ /1\n  ~~~~~~~r /2\n ~~~~~~~~ /3\n~~~~~r~~ /4",
        )
        self.assertEqual(
            draw_race([3, 7, -2], 12),
            "  ~~~r~~~~~~~~ /1\n ~~~~~~~r~~~~ /2\n~~~~~~~~~~r~ /3",
        )


if __name__ == "__main__":
    unittest.main()
