import unittest
from day02 import createFrame


class TestCreateFrame(unittest.TestCase):
    def test_create_frame(self):
        names = ["midu", "madeval", "educalvolpz", "midu"]
        expected_output = (
            "***************\n"
            "* midu        *\n"
            "* madeval     *\n"
            "* educalvolpz *\n"
            "* midu        *\n"
            "***************"
        )
        self.assertEqual(createFrame(names), expected_output)


if __name__ == "__main__":
    unittest.main()
