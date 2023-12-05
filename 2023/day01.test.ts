import { findFirstRepeated } from './day01';

test('finds the first repeated gift id', () => {
    const giftIds = [2, 1, 3, 5, 3, 2];
    const firstRepeatedId = findFirstRepeated(giftIds);
    expect(firstRepeatedId).toBe(3);
});

