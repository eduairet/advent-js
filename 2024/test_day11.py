import unittest
from day11 import decode_filename


class TestDecodeFilename(unittest.TestCase):
    def test_decode_filename(self):
        self.assertEqual(
            decode_filename("2023122512345678_sleighDesign.png.grinchwa"),
            "sleighDesign.png",
        )
        self.assertEqual(
            decode_filename("42_chimney_dimensions.pdf.hack2023"),
            "chimney_dimensions.pdf",
        )
        self.assertEqual(
            decode_filename("987654321_elf-roster.csv.tempfile"),
            "elf-roster.csv",
        )


if __name__ == "__main__":
    unittest.main()
