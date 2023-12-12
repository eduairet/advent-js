export function getIndexsForPalindrome(word: string) {
    if (word === [...word].reverse().join('')) return [];
    let wordArr = word.trim().toLowerCase().split('');
    for (const [i, il] of wordArr.entries()) {
        for (const [j, jl] of wordArr.entries()) {
            const preview = [...wordArr];
            preview[j] = il;
            preview[i] = jl;
            if (preview.join('') === preview.reverse().join('')) return [i, j];
        }
    }
    return null;
}
