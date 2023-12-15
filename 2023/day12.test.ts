import { checkIsValidCopy } from './day12';

test('returns true for valid copy "sa#ta cl#us is comin#"', () => {
    const original = 'Santa Claus is coming';
    const copy = 'sa#ta cl#us is comin#';
    const result = checkIsValidCopy(original, copy);
    expect(result).toBe(true);
});

test('returns false for invalid copy "p#nt: cla#s #s c+min#"', () => {
    const original = 'Santa Claus is coming';
    const copy = 'p#nt: cla#s #s c+min#';
    const result = checkIsValidCopy(original, copy);
    expect(result).toBe(false);
});

test('returns true for valid copy "s#+:. c:. s"', () => {
    const original = 'Santa Claus';
    const copy = 's#+:. c:. s';
    const result = checkIsValidCopy(original, copy);
    expect(result).toBe(true);
});
