import { revealSabotage } from './day19';

test('returns the revealed sabotage for the given store', () => {
    const store = [
        ['*', ' ', ' ', ' '],
        [' ', ' ', '*', ' '],
        [' ', ' ', ' ', ' '],
        ['*', ' ', ' ', ' '],
    ];
    const expected = [
        ['*', '2', '1', '1'],
        ['1', '2', '*', '1'],
        ['1', '2', '1', '1'],
        ['*', '1', ' ', ' '],
    ];
    const result = revealSabotage(store);
    expect(result).toEqual(expected);
});
