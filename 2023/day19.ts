export function revealSabotage(store: string[][]) {
    const result: string[][] = [...store];
    for (const [y, row] of store.entries()) {
        for (const [x, cell] of row.entries()) {
            if (cell === '*') {
                result[y][x] = '*';
                continue;
            }
            const adjacent = [
                store[y - 1]?.[x - 1],
                store[y - 1]?.[x],
                store[y - 1]?.[x + 1],
                store[y][x - 1],
                store[y][x + 1],
                store[y + 1]?.[x - 1],
                store[y + 1]?.[x],
                store[y + 1]?.[x + 1],
            ];
            const mines = adjacent.filter(cell => cell === '*').length;
            result[y][x] = mines === 0 ? ' ' : mines.toString();
        }
    }
    return result;
}
