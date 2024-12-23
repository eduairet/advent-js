from collections import defaultdict
import re


def compile(instructions):
    result = defaultdict(int)

    for instruction in instructions:
        order, *registers = instruction.split()

        if order == "MOV":
            result[registers[1]] = (
                re.match(r"^-?\d+$", registers[0])
                and int(registers[0])
                or result[registers[0]]
            )
        elif order == "INC":
            result[registers[0]] += 1
        elif order == "DEC":
            result[registers[0]] -= 1
        elif order == "JMP":
            if result[registers[0]] == 0:
                new_result = compile(instructions[int(registers[1]) :])
                return new_result

    return result["A"] or None
