export function organizeGifts(gifts: string) {
    const groups = gifts.split(/(\d+)([a-z])/).filter(Boolean);
    const formedGroups = groups.reduce<[number, string][]>((a, _, i, arr) => {
        if (i % 2 === 0) {
            const group = arr.slice(i, i + 2);
            a.push([+group[0], group[1]]);
        }
        return a;
    }, []);
    let result: string[] = [];
    for (const group of formedGroups) {
        const [count, symbol] = group;
        const totalBoxes = Math.floor(count / 10);
        const pallets = Math.floor(totalBoxes / 5);
        const boxes = totalBoxes % 5;
        const additional = count % 10;
        let pile = '';
        if (pallets > 0) pile += `[${symbol}]`.repeat(pallets);
        if (boxes > 0) pile += `{${symbol}}`.repeat(boxes);
        if (additional > 0) pile += `(${symbol.repeat(additional)})`;
        result.push(pile);
    }
    return result.join('');
}
