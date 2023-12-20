import { distributeGifts } from './day20';

test('distributes gifts correctly', () => {
    const input = [
        [4, 5, 1],
        [6, null, 3],
        [8, null, 4],
    ];
    const expected = [
        [5, 3, 3],
        [6, 5, 3],
        [7, 6, 4],
    ];
    const result = distributeGifts(input);
    expect(result).toEqual(expected);
});
