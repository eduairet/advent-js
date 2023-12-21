export function findBalancedSegment(message: number[]) {
    let result: number[] = [],
        max = 0;
    const count: { [key: number]: number } = { 0: 0, 1: 0 };
    for (let i = 0; i < message.length - 1; i++) {
        count[0] = count[1] = 0;
        for (let j = i; j < message.length; j++) {
            count[message[j]]++;
            if (count[0] === count[1] && max < count[0]) {
                result = [i, j];
                max = count[0];
            }
        }
    }
    return result;
}
