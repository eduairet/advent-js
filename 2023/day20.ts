export function distributeGifts(weights: (number | null)[][]) {
    const n = weights.length;
    const m = weights[0].length;
    const distributed: number[][] = new Array(n);
    for (let y = 0; y < n; y++) {
        distributed[y] = new Array(m);
        for (let x = 0; x < m; x++) {
            let sum = weights[y][x] ?? 0;
            let count = Number(!!weights[y][x]);
            const neighbors = [
                [x - 1, y],
                [x + 1, y],
                [x, y - 1],
                [x, y + 1],
            ];
            for (const [nx, ny] of neighbors) {
                const xSafe = nx >= 0 && nx < m;
                const ySafe = ny >= 0 && ny < n;
                const validCoord = xSafe && ySafe;
                if (validCoord && weights[ny][nx] !== null) {
                    sum += weights[ny][nx]!;
                    count++;
                }
            }
            distributed[y][x] = Math.round(sum / count);
        }
    }
    return distributed;
}
