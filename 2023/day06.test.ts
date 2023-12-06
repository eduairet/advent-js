import { maxDistance } from './day06';

test('maxDistance function - case 1', () => {
    const movements = '>>*<';
    const expected = 2;
    const result = maxDistance(movements);
    expect(result).toEqual(expected);
});

test('maxDistance function - case 2', () => {
    const movements = '<<<>';
    const expected = 2;
    const result = maxDistance(movements);
    expect(result).toEqual(expected);
});

test('maxDistance function - case 3', () => {
    const movements = '>***>';
    const expected = 5;
    const result = maxDistance(movements);
    expect(result).toEqual(expected);
});