export function organizeChristmasDinner(dishes: string[][]) {
    const ingredients = new Set([...dishes.flatMap(list => list.slice(1))]);
    const result = [];
    for (const ingredient of ingredients) {
        const d = dishes.filter(list => list.includes(ingredient));
        if (d.length > 1)
            result.push([ingredient, ...d.map(list => list[0]).sort()]);
    }
    result.sort((a, b) => a[0].localeCompare(b[0]));
    return result;
}
