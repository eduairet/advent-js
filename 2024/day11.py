import re

decode_filename = lambda filename: re.sub(r"^\d+_|(\.\w+)$", "", filename)
