export function cyberReindeer(road: string, time: number): string[] {
    const result: string[] = [road];
    let emptyRoad = `.${road.slice(1)}`;
    for (let i = 1, position = 0; i < time; i++) {
        if (i === 5) emptyRoad = emptyRoad.replace(/\|/g, '*');
        if (emptyRoad[position + 1] !== '|') position++;
        const [l, r] = [
            emptyRoad.slice(0, position),
            emptyRoad.slice(position + 1),
        ];
        result[i] = `${l}S${r}`;
    }
    return result;
}
