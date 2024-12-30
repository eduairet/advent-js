import unittest
from day15 import draw_table


class TestDrawTable(unittest.TestCase):
    def test_draw_table(self):
        data = [
            {"name": "Alice", "city": "London"},
            {"name": "Bob", "city": "Paris"},
            {"name": "Charlie", "city": "New York"},
        ]
        expected = "+---------+----------+\n| Name    | City     |\n+---------+----------+\n| Alice   | London   |\n| Bob     | Paris    |\n| Charlie | New York |\n+---------+----------+"
        self.assertEqual(draw_table(data), expected)


if __name__ == "__main__":
    unittest.main()
