export function maxGifts(houses: number[]) {
    const { length: n } = houses;
    let res: number[] = Array(n).fill(0);
    [res[0], res[1]] = [houses[0], Math.max(...houses.slice(0, 2))];
    for (let i = 2; i < n; i++) {
        const [o1, o2] = [res[i - 1], res[i - 2] + houses[i]];
        res[i] = Math.max(o1, o2);
    }
    return res.pop();
}
