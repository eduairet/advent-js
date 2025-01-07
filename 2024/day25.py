def execute(code: str) -> int:
    total = 0

    def consume(block):
        nonlocal total
        i = 0
        while i < len(block):
            order = block[i]

            if order == "+":
                total += 1
            elif order == "-":
                total -= 1
            elif order == "[":
                loop_end = block.find("]", i)
                loop_code = block[i + 1 : loop_end]
                while total != 0:
                    consume(loop_code)
                i = loop_end
            elif order == "{":
                if total == 0:
                    i = block.find("}", i)
            i += 1

    code = code.replace(">", "")
    consume(code)
    return total
