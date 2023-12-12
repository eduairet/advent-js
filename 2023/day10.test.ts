import { createChristmasTree } from './day10';

test('creates a christmas tree with an ornament', () => {
    const ornaments = '123';
    const height = 4;
    const expected = ['   1', '  2 3', ' 1 2 3', '1 2 3 1', '   |\n'].join('\n');
    const result = createChristmasTree(ornaments, height);
    expect(result).toBe(expected);
});
