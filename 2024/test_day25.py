import unittest
from day25 import execute


class TestExecute(unittest.TestCase):
    def test_execute(self):
        self.assertEqual(execute("+++"), 3)
        self.assertEqual(execute("+--"), -1)
        self.assertEqual(execute(">+++[-]"), 0)
        self.assertEqual(execute(">>>+{++}"), 3)
        self.assertEqual(execute("+{[-]+}+"), 2)
        self.assertEqual(execute("{+}{+}{+}"), 0)
        self.assertEqual(execute("------[+]++"), 2)
        self.assertEqual(execute("-[++{-}]+{++++}"), 5)
        self.assertEqual(execute("{+}{+}{+}"), 0)


if __name__ == "__main__":
    unittest.main()
