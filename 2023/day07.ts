export function drawGift(size: number, symbol: string) {
    if (size < 2) return '#\n';
    const border = ' '.repeat(size - 1) + '#'.repeat(size);
    const draw: string[] = [`${'#'.repeat(size)}${symbol.repeat(size - 2)}#`];
    for (let i = size - 2; i > 0; i--) {
        const line =
            [
                ' '.repeat(size - i - 1),
                symbol.repeat(size - 2),
                i - 1 > 0 ? symbol.repeat(i - 1) : '',
            ].join('#') + '#';
        draw.unshift(line), draw.push(line.trim());
    }
    return [border, ...draw, border.trim()].join('\n') + '\n';
}
