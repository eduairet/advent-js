import unittest
from day19 import distribute_weight


class TestDistributeWeight(unittest.TestCase):
    def test_distribute_weight(self):
        self.assertEqual(distribute_weight(1), " _ \n|_|")
        self.assertEqual(distribute_weight(2), " ___ \n|___|")
        self.assertEqual(distribute_weight(3), " _ \n|_|_\n|___|")
        self.assertEqual(distribute_weight(4), " ___ \n|___|\n|___|")
        self.assertEqual(distribute_weight(5), " _____ \n|     |\n|_____|")
        self.assertEqual(distribute_weight(6), " _ \n|_|___\n|     |\n|_____|")
        self.assertEqual(distribute_weight(7), " ___ \n|___|_\n|     |\n|_____|")
        self.assertEqual(distribute_weight(8), " _ \n|_|_\n|___|_\n|     |\n|_____|")
        self.assertEqual(distribute_weight(9), " ___ \n|___|\n|___|_\n|     |\n|_____|")
        self.assertEqual(distribute_weight(10), " _________ \n|         |\n|_________|")
        self.assertEqual(
            distribute_weight(11), " _ \n|_|_______\n|         |\n|_________|"
        )


if __name__ == "__main__":
    unittest.main()
