import { compile } from './day22';

test('compile - should return 3', () => {
    const code = '++*-';
    const expectedOutput = 3;
    const result = compile(code);
    expect(result).toEqual(expectedOutput);
});

test('compile - should return 6', () => {
    const code = '++%++<';
    const expectedOutput = 6;
    const result = compile(code);
    expect(result).toEqual(expectedOutput);
});

test('compile - should return 0', () => {
    const code = '++<--';
    const expectedOutput = 0;
    const result = compile(code);
    expect(result).toEqual(expectedOutput);
});

test('compile - should return 3', () => {
    const code = '++¿+?';
    const expectedOutput = 3;
    const result = compile(code);
    expect(result).toEqual(expectedOutput);
});

test('compile - should return -2', () => {
    const code = '--¿+++?';
    const expectedOutput = -2;
    const result = compile(code);
    expect(result).toEqual(expectedOutput);
});

test('compile - should return -1', () => {
    const code = '--¿+++?+++¿--?';
    const expectedOutput = -1;
    const result = compile(code);
    expect(result).toEqual(expectedOutput);
});
