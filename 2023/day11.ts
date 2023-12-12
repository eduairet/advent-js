export function getIndexsForPalindrome(word: string) {
    if (word === [...word].reverse().join('')) return [];
    let wordArr = word.trim().toLowerCase().split('');
    for (const [i, il] of wordArr.entries()) {
        for (const [j, jl] of wordArr.entries()) {
            const temp = [...wordArr];
            [temp[j], temp[i]] = [il, jl];
            if (temp.join('') === temp.reverse().join('')) return [i, j];
        }
    }
    return null;
}
