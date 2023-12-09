export function organizeGifts(gifts: string): string {
    const groups = gifts.match(/\d+[a-z]/g) || [];
    const result = [];
    for (const group of groups) {
        const [count, symbol] = [
            +group.match(/\d+/)![0],
            group.match(/[a-z]/)![0],
        ];

        const pallets = Math.floor(count / 50);
        const boxes = Math.floor((count % 50) / 10);
        const additional = count % 10;

        result.push(`[${symbol}]`.repeat(pallets));
        result.push(`{${symbol}}`.repeat(boxes));
        if (additional > 0) result.push(`(${symbol.repeat(additional)})`);
    }
    return result.join('');
}
