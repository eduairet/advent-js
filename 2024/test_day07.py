import unittest
from day07 import fix_packages


class TestFixPackages(unittest.TestCase):
    def test_fix_packages(self):
        self.assertEqual(fix_packages("a(cb)de"), "abcde")
        self.assertEqual(fix_packages("a(bc(def)g)h"), "agdefcbh")
        self.assertEqual(fix_packages("abc(def(gh)i)jk"), "abcighfedjk")
        self.assertEqual(fix_packages("a(b(c))e"), "acbe")


if __name__ == "__main__":
    unittest.main()
