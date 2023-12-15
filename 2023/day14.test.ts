import { maxGifts } from './day14';

test('returns 4 for maxGifts([2, 4, 2])', () => {
    const houses = [2, 4, 2];
    const result = maxGifts(houses);
    expect(result).toBe(4);
});

test('returns 10 for maxGifts([5, 1, 1, 5])', () => {
    const houses = [5, 1, 1, 5];
    const result = maxGifts(houses);
    expect(result).toBe(10);
});

test('returns 9 for maxGifts([4, 1, 1, 4, 2, 1])', () => {
    const houses = [4, 1, 1, 4, 2, 1];
    const result = maxGifts(houses);
    expect(result).toBe(9);
});

test('returns 103 for maxGifts([1, 3, 1, 3, 100])', () => {
    const houses = [1, 3, 1, 3, 100];
    const result = maxGifts(houses);
    expect(result).toBe(103);
});
