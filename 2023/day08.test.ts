import { organizeGifts } from './day08';

test('organizeGifts - should organize gifts based on the given criteria', () => {
    const gifts = '76a11b';
    const expectedOutput = '[a]{a}{a}(aaaaaa){b}(b)';
    const result = organizeGifts(gifts);
    expect(result).toEqual(expectedOutput);
});
