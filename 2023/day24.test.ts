import { getStaircasePaths } from './day24';

test('getStaircasePaths - should return all possible paths with max jump', () => {
    expect(getStaircasePaths(2, 1)).toEqual([[1, 1]]);
    expect(getStaircasePaths(3, 3)).toEqual([[1, 1, 1], [1, 2], [2, 1], [3]]);
    expect(getStaircasePaths(5, 1)).toEqual([[1, 1, 1, 1, 1]]);
    expect(getStaircasePaths(5, 2)).toEqual([
        [1, 1, 1, 1, 1],
        [1, 1, 1, 2],
        [1, 1, 2, 1],
        [1, 2, 1, 1],
        [1, 2, 2],
        [2, 1, 1, 1],
        [2, 1, 2],
        [2, 2, 1],
    ]);
    expect(getStaircasePaths(4, 2)).toEqual([
        [1, 1, 1, 1],
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],
        [2, 2],
    ]);
    expect(getStaircasePaths(7, 3)).toEqual([
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 2],
        [1, 1, 1, 1, 2, 1],
        [1, 1, 1, 1, 3],
        [1, 1, 1, 2, 1, 1],
        [1, 1, 1, 2, 2],
        [1, 1, 1, 3, 1],
        [1, 1, 2, 1, 1, 1],
        [1, 1, 2, 1, 2],
        [1, 1, 2, 2, 1],
        [1, 1, 2, 3],
        [1, 1, 3, 1, 1],
        [1, 1, 3, 2],
        [1, 2, 1, 1, 1, 1],
        [1, 2, 1, 1, 2],
        [1, 2, 1, 2, 1],
        [1, 2, 1, 3],
        [1, 2, 2, 1, 1],
        [1, 2, 2, 2],
        [1, 2, 3, 1],
        [1, 3, 1, 1, 1],
        [1, 3, 1, 2],
        [1, 3, 2, 1],
        [1, 3, 3],
        [2, 1, 1, 1, 1, 1],
        [2, 1, 1, 1, 2],
        [2, 1, 1, 2, 1],
        [2, 1, 1, 3],
        [2, 1, 2, 1, 1],
        [2, 1, 2, 2],
        [2, 1, 3, 1],
        [2, 2, 1, 1, 1],
        [2, 2, 1, 2],
        [2, 2, 2, 1],
        [2, 2, 3],
        [2, 3, 1, 1],
        [2, 3, 2],
        [3, 1, 1, 1, 1],
        [3, 1, 1, 2],
        [3, 1, 2, 1],
        [3, 1, 3],
        [3, 2, 1, 1],
        [3, 2, 2],
        [3, 3, 1],
    ]);
});
