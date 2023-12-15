export function autonomousDrive(
    store: string[],
    movements: string[]
): string[] {
    const s = store;
    let y = s.findIndex(row => row.includes('!'));
    let x = s[y].indexOf('!');
    s[y] = s[y].substring(0, x) + '.' + s[y].substring(x + 1);
    for (const m of movements) {
        if (m === 'U') y > 0 && s[y - 1][x] !== '*' && y--;
        if (m === 'R') x < s[0].length - 1 && s[y][x + 1] !== '*' && x++;
        if (m === 'D') y < s.length - 1 && s[y + 1][x] !== '*' && y++;
        if (m === 'L') x > 0 && s[y][x - 1] !== '*' && x--;
    }
    return s.map((r, i) => {
        if (i === y) return r.substring(0, x) + '!' + r.substring(x + 1);
        return r;
    });
}
