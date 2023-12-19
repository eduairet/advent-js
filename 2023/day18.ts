export function drawClock(time: string) {
    const digits = {
        ':': [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', '*', ' '],
            [' ', ' ', ' '],
            [' ', '*', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' '],
        ],
        '0': [
            ['*', '*', '*'],
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', '*', '*'],
        ],
        '1': [
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
        ],
        '2': [
            ['*', '*', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            ['*', '*', '*'],
            ['*', ' ', ' '],
            ['*', ' ', ' '],
            ['*', '*', '*'],
        ],
        '3': [
            ['*', '*', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            ['*', '*', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            ['*', '*', '*'],
        ],
        '4': [
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', '*', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
        ],
        '5': [
            ['*', '*', '*'],
            ['*', ' ', ' '],
            ['*', ' ', ' '],
            ['*', '*', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            ['*', '*', '*'],
        ],
        '6': [
            ['*', '*', '*'],
            ['*', ' ', ' '],
            ['*', ' ', ' '],
            ['*', '*', '*'],
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', '*', '*'],
        ],
        '7': [
            ['*', '*', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
        ],
        '8': [
            ['*', '*', '*'],
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', '*', '*'],
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', '*', '*'],
        ],
        '9': [
            ['*', '*', '*'],
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', '*', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            ['*', '*', '*'],
        ],
    };
    const compare = (digit: string[][]) => {
        const aStr = digit.map(row => row.join('')).join('\n');
        const bStr = digits[':'].map(row => row.join('')).join('\n');
        return aStr === bStr;
    };
    const digitsArr = time
        .split('')
        .map((digit: string) => digits[digit as keyof typeof digits]);
    const result: string[][] = Array(7).fill([]);
    for (let d = 0; d < digitsArr.length; d++) {
        const digit = digitsArr[d];
        const notLast = d < digitsArr.length - 1;
        const notBeforeColon = notLast && !compare(digitsArr[d + 1]);
        const notColon = !compare(digit);
        const hasSpace = notLast && notBeforeColon && notColon;
        for (let y = 0; y < digit.length; y++) {
            const row = digit[y];
            result[y] = result[y].concat(row);
            if (hasSpace) result[y].push(' ');
        }
    }
    return result;
}
