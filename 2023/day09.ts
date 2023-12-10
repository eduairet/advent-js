export function adjustLights(lights: string[]) {
    const first = lights[0];
    const second = first === '🟢' ? '🔴' : '🟢';
    let [a, b] = [0, 0];
    lights.forEach((l: string, i: number) => {
        if (i % 2 === 0) {
            const isPairRight = l === first;
            (a += +!isPairRight), (b += +isPairRight);
        } else {
            const isOddRight = l === second;
            (a += +!isOddRight), (b += +isOddRight);
        }
    });
    return Math.min(a, b);
}
