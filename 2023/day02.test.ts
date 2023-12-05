import { manufacture } from './day02';

test('manufacture - should filter gifts based on available materials', () => {
    const gifts = ['tren', 'oso', 'pelota'];
    const materials = 'tronesa';
    const expectedOutput = ['tren', 'oso'];
    const result = manufacture(gifts, materials);
    expect(result).toEqual(expectedOutput);
});