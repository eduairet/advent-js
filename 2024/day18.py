import re


def find_in_agenda(agenda: str, phone: str) -> dict | None:
    phone_re = r"\+\d{1,2}-\d{3}-\d{3}-\d{3}"
    name_re = r"<([^>]+)>"

    get_info = lambda c: {
        "name": re.search(name_re, c).group(1),
        "address": re.sub(phone_re, "", re.sub(name_re, "", c)).strip(),
    }

    contacts = [get_info(c) for c in agenda.split("\n") if phone in c]
    return contacts[0] if contacts else None
