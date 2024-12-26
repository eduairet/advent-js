import unittest
from day13 import is_robot_back


class TestIsRobotBack(unittest.TestCase):
    def test_is_robot_back(self):
        self.assertEqual(is_robot_back("R"), [1, 0])
        self.assertEqual(is_robot_back("RL"), True)
        self.assertEqual(is_robot_back("RLUD"), True)
        self.assertEqual(is_robot_back("*RU"), [2, 1])
        self.assertEqual(is_robot_back("R*U"), [1, 2])
        self.assertEqual(is_robot_back("LLL!R"), [-4, 0])
        self.assertEqual(is_robot_back("R?R"), [1, 0])
        self.assertEqual(is_robot_back("U?D"), True)
        self.assertEqual(is_robot_back("R!L"), [2, 0])
        self.assertEqual(is_robot_back("U!D"), [0, 2])
        self.assertEqual(is_robot_back("R?L"), True)
        self.assertEqual(is_robot_back("U?U"), [0, 1])
        self.assertEqual(is_robot_back("U?D?U"), True)
        self.assertEqual(is_robot_back("*U?U"), [0, 2])
