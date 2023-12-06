import { cyberReindeer } from './day05';

test('cyberReindeer function', () => {
    const road = 'S..|...|..';
    const time = 10;
    const expected = [
        'S..|...|..',
        '.S.|...|..',
        '..S|...|..',
        '..S|...|..',
        '..S|...|..',
        '...S...*..',
        '...*S..*..',
        '...*.S.*..',
        '...*..S*..',
        '...*...S..',
    ];
    const result = cyberReindeer(road, time);
    expect(result).toEqual(expected);
});
