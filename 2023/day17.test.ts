import { optimizeIntervals } from './day17';

test('returns the optimized intervals for the given input', () => {
    const intervals = [
        [5, 8],
        [2, 7],
        [3, 4],
    ];
    const expected = [[2, 8]];
    const result = optimizeIntervals(intervals);
    expect(result).toEqual(expected);
});

test('returns the optimized intervals for the given input', () => {
    const intervals = [
        [1, 3],
        [8, 10],
        [2, 6],
    ];
    const expected = [
        [1, 6],
        [8, 10],
    ];
    const result = optimizeIntervals(intervals);
    expect(result).toEqual(expected);
});

test('returns the optimized intervals for the given input', () => {
    const intervals = [
        [3, 4],
        [1, 2],
        [5, 6],
    ];
    const expected = [
        [1, 2],
        [3, 4],
        [5, 6],
    ];
    const result = optimizeIntervals(intervals);
    expect(result).toEqual(expected);
});
