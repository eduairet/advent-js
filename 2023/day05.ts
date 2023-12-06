export function cyberReindeer(road: string, time: number): Array<string> {
    const result = [road];
    const emptyRoad = Array.from(road).map((char) => (char === 'S' ? '.' : char));
    let position = 0;
    while (time > 1) {
        if (emptyRoad[position + 1] !== '|') position++;
        const left = emptyRoad.slice(0, position);
        const right = emptyRoad.slice(position + 1);
        result.push(`${left.join('')}S${right.join('')}`);
        time--;
    }
    return result;
}
