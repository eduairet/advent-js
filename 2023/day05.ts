export function cyberReindeer(road: string, time: number): string[] {
    const result = [road];
    let [emptyRoad, i, position] = [`.${road.slice(1)}`, 0, 0];
    while (time-- > 1) {
        i++;
        if (i === 5) emptyRoad = emptyRoad.replace(/\|/g, '*');
        if (emptyRoad[position + 1] !== '|') position++;
        const [left, right] = [
            emptyRoad.substring(0, position),
            emptyRoad.substring(position + 1),
        ];
        result.push(`${left}S${right}`);
    }
    return result;
}
