export function getStaircasePaths(steps: number, maxJump: number) {
    function generatePaths(i: number, path: number[]): number[][] {
        const result = [];
        if (i === 0) result.push(path);
        for (let j = 1; j <= Math.min(i, maxJump); j++) {
            result.push(...generatePaths(i - j, [...path, j]));
        }
        return result;
    }
    const staircasePaths = generatePaths(steps, []);
    return staircasePaths;
}

getStaircasePaths(7, 3);
