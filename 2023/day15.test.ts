import { autonomousDrive } from './day15';

test('returns the correct result for given store and movements', () => {
    const store = ['..!....', '...*.*.'];
    const movements = ['R', 'R', 'D', 'L'];
    const expected = ['.......', '...*!*.'];
    const result = autonomousDrive(store, movements);
    expect(result).toEqual(expected);
});

test('returns the correct result for given store and movements', () => {
    const store = ['..!....', '......*'];
    const movements = ['R', 'D', 'L'];
    const expected = ['.......', '..!...*'];
    const result = autonomousDrive(store, movements);
    expect(result).toEqual(expected);
});

test('returns the correct result for given store and movements', () => {
    const store = ['*..!..*', '*.....*'];
    const movements = ['R', 'R', 'R', 'D', 'D'];
    const expected = ['*.....*', '*....!*'];
    const result = autonomousDrive(store, movements);
    expect(result).toEqual(expected);
});
