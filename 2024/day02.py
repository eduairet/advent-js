def createFrame(names):
    length = max(len(n) for n in names)
    border = "*" * (length + 4)
    return "\n".join([border, *[f"* {n.ljust(length, ' ')} *" for n in names], border])
