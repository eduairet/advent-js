import unittest
from day24 import is_trees_synchronized


class TestIsTreesSunchronized(unittest.TestCase):

    def test_is_trees_synchronized(self):
        tree1 = {"value": "🎄", "left": {"value": "⭐"}, "right": {"value": "🎅"}}
        tree2 = {"value": "🎄", "left": {"value": "🎅"}, "right": {"value": "⭐"}}
        self.assertEqual(is_trees_synchronized(tree1, tree2), [True, "🎄"])

        tree3 = {"value": "🎄", "left": {"value": "🎅"}, "right": {"value": "🎁"}}
        self.assertEqual(is_trees_synchronized(tree1, tree3), [False, "🎄"])

        tree4 = {"value": "🎄", "left": {"value": "⭐"}, "right": {"value": "🎅"}}
        self.assertEqual(is_trees_synchronized(tree1, tree4), [False, "🎄"])

        self.assertEqual(
            is_trees_synchronized({"value": "🎅"}, {"value": "🧑‍🎄"}), [False, "🎅"]
        )


if __name__ == "__main__":
    unittest.main()
