export function getIndexsForPalindrome(word: string) {
    if (word === [...word].reverse().join('')) return [];
    let wordArr = [...word];
    const temp = [...wordArr];
    for (const [i, l1] of wordArr.entries()) {
        for (const [j, l2] of wordArr.entries()) {
            [temp[j], temp[i]] = [l1, l2];
            if (temp.join('') === [...temp].reverse().join('')) return [i, j];
            [temp[j], temp[i]] = [l2, l1];
        }
    }
    return null;
}
