import unittest
from day22 import generate_gift_sets


class TestGenerateGiftSets(unittest.TestCase):
    def test_generate_gift_sets(self):
        self.assertEqual(
            generate_gift_sets(["car", "doll", "puzzle"]),
            [
                ["car"],
                ["doll"],
                ["puzzle"],
                ["car", "doll"],
                ["car", "puzzle"],
                ["doll", "puzzle"],
                ["car", "doll", "puzzle"],
            ],
        )
        self.assertEqual(generate_gift_sets(["ball"]), [["ball"]])
        self.assertEqual(
            generate_gift_sets(["game", "pc"]), [["game"], ["pc"], ["game", "pc"]]
        )
        self.assertEqual(
            generate_gift_sets(["apple", "banana", "cherry", "date"]),
            [
                ["apple"],
                ["banana"],
                ["cherry"],
                ["date"],
                ["apple", "banana"],
                ["apple", "cherry"],
                ["apple", "date"],
                ["banana", "cherry"],
                ["banana", "date"],
                ["cherry", "date"],
                ["apple", "banana", "cherry"],
                ["apple", "banana", "date"],
                ["apple", "cherry", "date"],
                ["banana", "cherry", "date"],
                ["apple", "banana", "cherry", "date"],
            ],
        )
        self.assertEqual(
            generate_gift_sets(["pen", "notebook", "eraser", "pencil", "marker"]),
            [
                ["pen"],
                ["notebook"],
                ["eraser"],
                ["pencil"],
                ["marker"],
                ["pen", "notebook"],
                ["pen", "eraser"],
                ["pen", "pencil"],
                ["pen", "marker"],
                ["notebook", "eraser"],
                ["notebook", "pencil"],
                ["notebook", "marker"],
                ["eraser", "pencil"],
                ["eraser", "marker"],
                ["pencil", "marker"],
                ["pen", "notebook", "eraser"],
                ["pen", "notebook", "pencil"],
                ["pen", "notebook", "marker"],
                ["pen", "eraser", "pencil"],
                ["pen", "eraser", "marker"],
                ["pen", "pencil", "marker"],
                ["notebook", "eraser", "pencil"],
                ["notebook", "eraser", "marker"],
                ["notebook", "pencil", "marker"],
                ["eraser", "pencil", "marker"],
                ["pen", "notebook", "eraser", "pencil"],
                ["pen", "notebook", "eraser", "marker"],
                ["pen", "notebook", "pencil", "marker"],
                ["pen", "eraser", "pencil", "marker"],
                ["notebook", "eraser", "pencil", "marker"],
                ["pen", "notebook", "eraser", "pencil", "marker"],
            ],
        )


if __name__ == "__main__":
    unittest.main()
