import unittest
from day10 import compile


class TestCompile(unittest.TestCase):
    def test_compile(self):
        self.assertEqual(
            compile(["MOV -1 C", "INC C", "JMP C 1", "MOV C A", "INC A"]), 2
        )
        self.assertEqual(compile(["MOV 0 A", "INC A"]), 1)
        self.assertEqual(
            compile(
                [
                    "INC A",
                    "INC A",
                    "DEC A",
                    "MOV A B",
                ]
            ),
            1,
        )
        self.assertEqual(compile(["MOV 5 B", "DEC B", "MOV B A", "INC A"]), 5)
        self.assertEqual(
            compile(["MOV 2 X", "DEC X", "DEC X", "JMP X 1", "MOV X A"]), -2
        )


if __name__ == "__main__":
    unittest.main()
