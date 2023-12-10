export function adjustLights(lights: string[]) {
    const a = lights.filter((l: string, i: number, arr: string[]) => {
        if (i % 2 === 0) return l !== arr[0];
        return l !== (arr[0] === '🟢' ? '🔴' : '🟢');
    }).length;
    const b = lights.filter((l: string, i: number, arr: string[]) => {
        if (i % 2 === 0) return l === arr[0];
        return l !== (arr[0] !== '🟢' ? '🔴' : '🟢');
    }).length;
    return Math.min(a, b);
}
