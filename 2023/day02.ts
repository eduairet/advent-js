export function manufacture(gifts: string[], materials: string): string[] {
    if (!gifts || !materials) [];
    const materialSet = new Set(materials);
    return gifts.filter(gift => {
        const { length } = gift;
        for (let i = 0; i < length; i++) {
            if (!materialSet.has(gift[i])) return false;
        }
        return true;
    });
}
