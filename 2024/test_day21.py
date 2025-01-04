import unittest
from day21 import tree_height


class TestTreeHeight(unittest.TestCase):
    def test_tree_height(self):
        tree = {
            "value": "🎁",
            "left": {
                "value": "🎄",
                "left": {"value": "⭐", "left": None, "right": None},
                "right": {"value": "🎅", "left": None, "right": None},
            },
            "right": {
                "value": "❄️",
                "left": None,
                "right": {"value": "🦌", "left": None, "right": None},
            },
        }
        self.assertEqual(tree_height(tree), 3)


if __name__ == "__main__":
    unittest.main()
