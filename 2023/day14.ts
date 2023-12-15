export function maxGifts(houses: number[]) {
    const { length: n } = houses;
    let prevMax = houses[0];
    let currMax = Math.max(...houses.slice(0, 2));
    for (let i = 2; i < n; i++) {
        let newMax = Math.max(currMax, prevMax + houses[i]);
        prevMax = currMax;
        currMax = newMax;
    }
    return currMax;
}
