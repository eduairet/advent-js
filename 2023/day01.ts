export function findFirstRepeated(gifts: number[]) {
    let ids = new Set();
    for (const id of gifts) {
        if (ids.has(id)) return id;
        ids.add(id);
    }
    return -1;
}
