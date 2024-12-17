import unittest
from day04 import create_xmas_tree


class TestCreateXmasTree(unittest.TestCase):
    def test_create_xmas_tree(self):
        tree = "____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____"
        self.assertEqual(create_xmas_tree(5, "*"), tree)


if __name__ == "__main__":
    unittest.main()
