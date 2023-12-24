import { organizeChristmasDinner } from './day23';

test('organizeChristmasDinner - should organize dishes based on ingredients', () => {
    const dishes = [
        ['christmas turkey', 'turkey', 'sauce', 'herbs'],
        ['cake', 'flour', 'sugar', 'egg'],
        ['hot chocolate', 'chocolate', 'milk', 'sugar'],
        ['pizza', 'sauce', 'tomato', 'cheese', 'ham'],
    ];
    const expectedOutput = [
        ['sauce', 'christmas turkey', 'pizza'],
        ['sugar', 'cake', 'hot chocolate'],
    ];
    const result = organizeChristmasDinner(dishes);
    expect(result).toEqual(expectedOutput);
});
