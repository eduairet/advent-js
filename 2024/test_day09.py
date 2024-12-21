import unittest
from day09 import move_train


class TestMoveTrain(unittest.TestCase):
    BOARD = ["·····", "*····", "@····", "o····", "o····"]

    def test_move_train(self):
        self.assertEqual(move_train(self.BOARD, "U"), "eat")
        self.assertEqual(move_train(self.BOARD, "D"), "crash")
        self.assertEqual(move_train(self.BOARD, "L"), "crash")
        self.assertEqual(move_train(self.BOARD, "R"), "none")


if __name__ == "__main__":
    unittest.main()
