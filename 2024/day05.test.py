import unittest
from day05 import organizeShoes


class TestOrganizeShoes(unittest.TestCase):
    def test_organize_shoes(self):
        shoes = [
            {"type": "I", "size": 38},
            {"type": "R", "size": 38},
            {"type": "I", "size": 38},
            {"type": "R", "size": 38},
            {"type": "R", "size": 42},
            {"type": "I", "size": 41},
            {"type": "I", "size": 42},
        ]
        self.assertEqual(organizeShoes(shoes), [38, 38, 42])


if __name__ == "__main__":
    unittest.main()
