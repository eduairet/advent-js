export function getIndexsForPalindrome(word: string) {
    if (word === [...word].reverse().join('')) return [];
    let wordArr = [...word];
    for (const [i, l1] of wordArr.entries()) {
        for (const [j, l2] of wordArr.entries()) {
            const temp = [...wordArr];
            [temp[j], temp[i]] = [l1, l2];
            if (temp.join('') === temp.reverse().join('')) return [i, j];
        }
    }
    return null;
}
