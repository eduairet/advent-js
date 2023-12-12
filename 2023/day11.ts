export function getIndexsForPalindrome(word: string) {
    if (word === [...word].reverse().join('')) return [];
    const n = word.length;
    const tempArr = [...word];
    for (let i = 0; i < n / 2; i++) {
        for (let j = i + 1; j < n; j++) {
            [tempArr[i], tempArr[j]] = [word[j], word[i]];
            if (tempArr.join('') === [...tempArr].reverse().join(''))
                return [i, j];
            [tempArr[i], tempArr[j]] = [word[i], word[j]];
        }
    }
    return null;
}
