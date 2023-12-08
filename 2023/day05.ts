export function drawGift(size: number, symbol: string) {
    const b = '#';
    if (size < 2) return `${b}\n`;
    const extreme = ' '.repeat(size - 1) + b.repeat(size);
    const draw: string[] = [`${b.repeat(size)}${symbol.repeat(size - 2)}${b}`];
    for (let i = size - 2; i > 0; i--) {
        const line =
            [
                ' '.repeat(size - i - 1),
                symbol.repeat(size - 2),
                i - 1 > 0 ? symbol.repeat(i - 1) : '',
            ].join(b) + b;
        draw.unshift(line), draw.push(line.trim());
    }
    return [extreme, ...draw, extreme.trim()].join('\n') + '\n';
}
