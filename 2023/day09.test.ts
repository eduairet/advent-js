import { adjustLights } from './day09';

test('adjusts lights with one change needed', () => {
    const lights = ['🟢', '🔴', '🟢', '🟢', '🟢'];
    const result = adjustLights(lights);
    expect(result).toBe(1);
});

test('adjusts lights with two changes needed', () => {
    const lights = ['🔴', '🔴', '🟢', '🟢', '🔴'];
    const result = adjustLights(lights);
    expect(result).toBe(2);
});

test('adjusts lights with no changes needed', () => {
    const lights = ['🟢', '🔴', '🟢', '🔴', '🟢'];
    const result = adjustLights(lights);
    expect(result).toBe(0);
});

test('adjusts lights with one change needed in a sequence of same lights', () => {
    const lights = ['🔴', '🔴', '🔴'];
    const result = adjustLights(lights);
    expect(result).toBe(1);
});