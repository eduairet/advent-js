def fix_packages(packages):
    if "(" not in packages:
        return packages
    close = packages.find(")")
    open = packages.rfind("(", 0, close)
    result = fix_packages(
        packages[:open] + packages[open + 1 : close][::-1] + packages[close + 1 :]
    )
    return result
