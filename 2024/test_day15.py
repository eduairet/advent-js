import unittest
from day15 import draw_table


class TestDrawTable(unittest.TestCase):
    def test_draw_table(self):
        data = [
            {"name": "Alice", "city": "London"},
            {"name": "Bob", "city": "Paris"},
            {"name": "Charlie", "city": "New York"},
        ]
        expected = """
+---------+-----------+
| Name    | City      |
+---------+-----------+
| Alice   | London    |
| Bob     | Paris     |
| Charlie | New York  |
+---------+-----------+
"""
        self.assertEqual(draw_table(data), expected)
