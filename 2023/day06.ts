export function maxDistance(movements: string): number {
    const { abs } = Math;
    let [l, r, w] = [0, 0, 0];
    for (const movement of movements) {
        if (movement === '<') l++;
        if (movement === '>') r++;
        if (movement === '*') w++;
    }
    let result = 0;
    if (l + w - r > r + w - l) result = abs(l + w - r);
    else result = abs(r + w - l);
    return result;
}
