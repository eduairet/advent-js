import { drawGift } from './day07';

test('drawGift function - case 1', () => {
    const size = 4;
    const symbol = '+';
    const expected = `   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n`;
    const result = drawGift(size, symbol);
    expect(result).toEqual(expected);
});

test('drawGift function - case 2', () => {
    const size = 5;
    const symbol = '*';
    const expected = `    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n`;
    const result = drawGift(size, symbol);
    expect(result).toEqual(expected);
});

test('drawGift function - case 3', () => {
    const size = 1;
    const symbol = '^';
    const expected = `#\n`;
    const result = drawGift(size, symbol);
    expect(result).toEqual(expected);
});
