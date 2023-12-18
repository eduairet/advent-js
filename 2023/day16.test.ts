import { transformTree } from './day16';

test('transforms the tree correctly', () => {

    const tree = [3, 1, 0, 8, 12, null, 1];
    const expected = {
        value: 3,
        left: {
            value: 1,
            left: {
                value: 8,
                left: null,
                right: null,
            },
            right: {
                value: 12,
                left: null,
                right: null,
            },
        },
        right: {
            value: 0,
            left: null,
            right: {
                value: 1,
                left: null,
                right: null,
            },
        },
    };
    const result = transformTree(tree);
    expect(result).toEqual(expected);
});
