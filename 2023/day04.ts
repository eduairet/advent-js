export function decode(message: string) {
    const regex = /\([^\(\)]+\)/;
    while (message.match(regex)) {
        const match = message.match(regex)?.[0];
        if (!match) break;
        const cleanStr = match.replace('(', '').replace(')', '');
        message = message.replace(match, [...cleanStr].reverse().join(''));
    }
    return message;
}
