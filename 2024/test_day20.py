import unittest
from day20 import fix_gift_list


class TestFixGiftList(unittest.TestCase):
    def test_fix_gift_list(self):
        self.assertEqual(
            fix_gift_list(
                ["puzzle", "car", "doll", "car"], ["car", "puzzle", "doll", "ball"]
            ),
            {"missing": {"ball": 1}, "extra": {"car": 1}},
        )
        self.assertEqual(
            fix_gift_list(
                ["book", "train", "kite", "train"],
                ["train", "book", "kite", "ball", "kite"],
            ),
            {"missing": {"ball": 1, "kite": 1}, "extra": {"train": 1}},
        )
        self.assertEqual(
            fix_gift_list(
                ["bear", "bear", "car"], ["bear", "car", "puzzle", "bear", "car", "car"]
            ),
            {"missing": {"puzzle": 1, "car": 2}, "extra": {}},
        )
        self.assertEqual(
            fix_gift_list(["bear", "bear", "car"], ["car", "bear", "bear"]),
            {"missing": {}, "extra": {}},
        )


if __name__ == "__main__":
    unittest.main()
