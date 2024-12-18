import unittest
from day06 import in_box


class TestInBox(unittest.TestCase):
    def test_in_box_valid(self):
        box = ["###", "#*#", "###"]
        self.assertTrue(in_box(box))

    def test_in_box_outside(self):
        box = ["#####", "#   #", "#  #*", "#####"]
        self.assertFalse(in_box(box))

    def test_in_box_empty(self):
        box = ["#####", "#   #", "#   #", "#   #", "#####"]
        self.assertFalse(in_box(box))


if __name__ == "__main__":
    unittest.main()
