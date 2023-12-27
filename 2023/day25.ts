export function travelDistance(map: string) {
    const rows = map.split('\n');
    let santaY = rows.findIndex(line => line.includes('S'));
    let santaX = rows[santaY].indexOf('S');
    interface KidCoords {
        [k: string]: { y: number; x: number };
    }
    const kidCoords: KidCoords = Object.fromEntries(
        rows
            .map((line, y) => {
                const lineArr = line.split('');
                return lineArr
                    .map((char: string, x) =>
                        /\d/.test(char) ? [char, { y, x }] : null
                    )
                    .filter(Boolean) as Array<
                    [string, { y: number; x: number }]
                >;
            })
            .flat()
    );
    let result = 0;
    const lastKid = Math.max(...Object.keys(kidCoords).map(Number));
    for (let i = 1; i <= lastKid; i++) {
        const { y, x } = kidCoords[i];
        const xDist = Math.abs(santaY - y);
        const yDist = Math.abs(santaX - x);
        const distance = xDist + yDist;
        result += distance;
        [santaY, santaX] = [y, x];
    }
    return result;
}

const map1 = `.....1....
..S.......
..........
....3.....
......2...`;
travelDistance(map1);
