export function findNaughtyStep(original: string, modified: string): string {
    if (original === modified) return '';
    let s1: string, s2: string;
    const oIsLarger = original.length > modified.length;
    s1 = oIsLarger ? original : modified;
    s2 = oIsLarger ? modified : original;
    let result = '';
    for (let i = 0, j = 0; i < s1.length; i++) {
        if (j < s2.length && s1[i] === s2[j]) j++;
        else result += s1[i];
    }
    return result;
}
