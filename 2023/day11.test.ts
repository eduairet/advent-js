import { getIndexsForPalindrome } from './day11';

test('returns an empty array for palindrome word "anna"', () => {
    const word = 'anna';
    const expected: number[] = [];
    const result = getIndexsForPalindrome(word);
    expect(result).toEqual(expected);
});

test('returns [0, 1] for palindrome word "abab"', () => {
    const word = 'abab';
    const expected = [0, 1];
    const result = getIndexsForPalindrome(word);
    expect(result).toEqual(expected);
});

test('returns null for non-palindrome word "abac"', () => {
    const word = 'abac';
    const expected = null;
    const result = getIndexsForPalindrome(word);
    expect(result).toEqual(expected);
});

test('returns an empty array for palindrome word "aaaaaaaa"', () => {
    const word = 'aaaaaaaa';
    const expected: number[] = [];
    const result = getIndexsForPalindrome(word);
    expect(result).toEqual(expected);
});

test('returns [1, 3] for palindrome word "aaababa"', () => {
    const word = 'aaababa';
    const expected = [1, 3];
    const result = getIndexsForPalindrome(word);
    expect(result).toEqual(expected);
});

test('returns null for non-palindrome word "caababa"', () => {
    const word = 'caababa';
    const expected = null;
    const result = getIndexsForPalindrome(word);
    expect(result).toEqual(expected);
});

test('returns [4, 8] for non-palindrome word "rotaratov"', () => {
    const word = 'rotaratov';
    const expected = [4, 8];
    const result = getIndexsForPalindrome(word);
    expect(result).toEqual(expected);
});
