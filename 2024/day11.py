import re

decode_filename = lambda filename: re.sub(r"^\d+_|(\.\w+)$", "", filename)

print(decode_filename("2023122512345678_sleighDesign.png.grinchwa"))
