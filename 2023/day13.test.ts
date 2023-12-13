import { calculateTime } from './day13';

test('returns correct time for deliveries ["00:10:00", "01:00:00", "03:30:00"]', () => {
    const deliveries = ['00:10:00', '01:00:00', '03:30:00'];
    const result = calculateTime(deliveries);
    expect(result).toBe('-02:20:00');
});

test('returns correct time for deliveries ["02:00:00", "05:00:00", "00:30:00"]', () => {
    const deliveries = ['02:00:00', '05:00:00', '00:30:00'];
    const result = calculateTime(deliveries);
    expect(result).toBe('00:30:00');
});

test('returns correct time for deliveries ["00:45:00", "00:45:00", "00:00:30", "00:00:30"]', () => {
    const deliveries = ['00:45:00', '00:45:00', '00:00:30', '00:00:30'];
    const result = calculateTime(deliveries);
    expect(result).toBe('-05:29:00');
});
