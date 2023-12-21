import { findBalancedSegment } from './day21';

test('finds the longest balanced segment in an array', () => {
    const arr1 = [1, 1, 0, 1, 1, 0, 1, 1];
    const result1 = findBalancedSegment(arr1);
    expect(result1).toEqual([2, 5]);

    const arr2 = [1, 1, 0];
    const result2 = findBalancedSegment(arr2);
    expect(result2).toEqual([1, 2]);

    const arr3 = [1, 1, 1];
    const result3 = findBalancedSegment(arr3);
    expect(result3).toEqual([]);

    const arr4 = [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1];
    const result4 = findBalancedSegment(arr4);
    expect(result4).toEqual([5, 10]);
});
