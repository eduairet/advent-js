def draw_table(data):
    lengths = [
        max(max(len(str(key)), len(str(value))) for key, value in row.items())
        for row in data
    ]

    column_size = max(length for length in lengths) + 2

    header = ""  # TODO: Implement header
