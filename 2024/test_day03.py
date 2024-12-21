import unittest
from day03 import organize_inventory


class TestOrganizeInventory(unittest.TestCase):
    def test_organize_inventory(self):
        inventory = [
            {"name": "doll", "quantity": 5, "category": "toys"},
            {"name": "car", "quantity": 3, "category": "toys"},
            {"name": "ball", "quantity": 2, "category": "sports"},
            {"name": "car", "quantity": 2, "category": "toys"},
            {"name": "racket", "quantity": 4, "category": "sports"},
        ]

        expected = {"toys": {"doll": 5, "car": 5}, "sports": {"ball": 2, "racket": 4}}
        self.assertEqual(organize_inventory(inventory), expected)


if __name__ == "__main__":
    unittest.main()
