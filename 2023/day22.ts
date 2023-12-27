export function compile(code: string) {
    let [i, counter, altCount, inCond] = [0, 0, 0, false];
    const returned = new Set();
    while (i < code.length) {
        const op = code[i];
        if (op === '<' && !returned.has(i)) {
            const traveled = code.slice(0, i + 1);
            if (traveled.includes('%')) {
                returned.add(i);
                i = traveled.lastIndexOf('%') + 1;
                continue;
            }
        }
        if (['¿', '?'].includes(op)) inCond = op === '¿';
        if (!inCond || (inCond && altCount > 0)) {
            if (op === '+') counter++;
            if (op === '*') counter *= 2;
            if (op === '-') counter--;
        }
        if (!inCond) altCount = counter;
        i++;
    }
    return counter;
}
