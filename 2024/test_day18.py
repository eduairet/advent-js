import unittest
from day18 import find_in_agenda


class TestFindInAgenda(unittest.TestCase):
    def test_find_in_agenda(self):
        agenda = "+34-600-123-456 Calle Gran Via 12 <Juan Perez>\nPlaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York"
        self.assertEqual(
            find_in_agenda(agenda, "34-600-123-456"),
            {"name": "Juan Perez", "address": "Calle Gran Via 12"},
        )
        self.assertEqual(
            find_in_agenda(agenda, "600-987"),
            {
                "name": "Maria Gomez",
                "address": "Plaza Mayor 45 Madrid 28013",
            },
        )
        self.assertEqual(
            find_in_agenda(agenda, "800-555"),
            {"name": "Carlos Ruiz", "address": "9 Fifth Ave New York"},
        )


if __name__ == "__main__":
    unittest.main()
