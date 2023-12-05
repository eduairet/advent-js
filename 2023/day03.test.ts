import { findNaughtyStep } from './day03';

test('finds the naughty step', () => {
    const original = 'abcd';
    const modified = 'abcde';
    const naughtyStep = findNaughtyStep(original, modified);
    expect(naughtyStep).toBe('e');
});