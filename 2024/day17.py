def detect_bombs(grid):
    result = [[0 for _ in row] for row in grid]
    rows = len(grid)
    cols = len(grid[0]) if grid else 0
    directions = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]
    for y in range(rows):
        for x in range(cols):
            result[y][x] = sum(
                grid[y + dy][x + dx]
                for dy, dx in directions
                if 0 <= y + dy < rows and 0 <= x + dx < cols
            )
    return result
