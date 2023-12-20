export function distributeGifts(weights: (number | null)[][]) {
    const isValidNeighbor = ([x, y]: number[]) => {
        const xSafe = x >= 0 && x < weights[0].length;
        const ySafe = y >= 0 && y < weights.length;
        return xSafe && ySafe;
    };
    const distributed: number[][] = weights.map(row => row.map(v => v ?? 0));
    for (const [y, row] of weights.entries()) {
        for (let x = 0; x < row.length; x++) {
            const neighbors = [
                [x - 1, y],
                [x + 1, y],
                [x, y - 1],
                [x, y + 1],
            ].filter(isValidNeighbor);
            let count = neighbors.length + (weights[y][x] !== null ? 1 : 0);
            for (const [nx, ny] of neighbors) {
                let neighbor = weights[ny][nx];
                if (neighbor === null) {
                    count--;
                    continue;
                }
                distributed[y][x] += neighbor;
            }
            distributed[y][x] = Math.round(distributed[y][x] / count);
        }
    }
    return distributed;
}
