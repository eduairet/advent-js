import re


def remove_snow(s):
    while re.search(r"(.)\1", s):
        s = re.sub(r"(.)\1", "", s)
    return s
