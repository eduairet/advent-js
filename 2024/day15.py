def draw_table(data):
    headers = sorted({key.capitalize() for row in data for key in row})
    rows = [[row.get(col.lower(), "") for col in headers] for row in data]
    col_widths = [max(len(str(cell)) for cell in column) for column in zip(*([headers] + rows))]
    divider = "+" + "+".join("-" * (width + 2) for width in col_widths) + "+"
    formatted = [divider]
    formatted.append("| " + " | ".join(f"{header.ljust(col_widths[i])}" for i, header in enumerate(headers)) + " |")
    formatted.append(divider)
    for row in rows:
        formatted.append("| " + " | ".join(f"{str(cell).ljust(col_widths[i])}" for i, cell in enumerate(row)) + " |")
    formatted.append(divider)
    return "\n".join(formatted)


print(
    draw_table(
        [
            {"name": "Alice", "city": "London"},
            {"name": "Bob", "city": "Paris"},
            {"name": "Charlie", "city": "New York"},
        ]
    )
)
"""
+---------+-----------+
| Name    | City      |
+---------+-----------+
| Alice   | London    |
| Bob     | Paris     |
| Charlie | New York  |
+---------+-----------+
"""
