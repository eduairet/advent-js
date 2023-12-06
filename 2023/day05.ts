export function cyberReindeer(road: string, time: number): Array<string> {
    const result = [road];
    let emptyRoad = road.replace('S', '.');
    let [i, position] = [0, 0];
    while (time > 1) {
        i++;
        if (i === 5) emptyRoad = emptyRoad.replace(/\|/g, '*');
        if (emptyRoad[position + 1] !== '|') position++;
        const [left, right] = [
            emptyRoad.substring(0, position),
            emptyRoad.substring(position + 1),
        ];
        result.push(`${left}S${right}`);
        time--;
    }
    return result;
}
