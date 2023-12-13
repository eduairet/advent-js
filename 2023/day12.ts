export function checkIsValidCopy(original: string, copy: string) {
    if (original.length !== copy.length) return false;
    const re = {
        subs: /^[A-ZÁÉÍÓÚÑÜa-záéíóúüñ#:+.\s]$/,
        chars: /^[A-ZÁÉÍÓÚÑÜa-záéíóúüñ]$/,
        upper: /^[A-ZÁÉÍÓÚÜÑ]$/,
        lower: /^[a-záéíóúüñ]$/,
        '#': /^[#+:\.]$/,
        '+': /^[+:\.]$/,
        ':': /^[:\.]$/,
        '.': /^[\.]$/,
    };
    const symbols = '#:+.';
    return [...original].every((char: string, i) => {
        const cChar = copy[i];
        // @ts-ignore
        if (symbols.includes(char)) return re[char].test(char);
        if (re.chars.test(char)) {
            if (re.upper.test(cChar) && char !== cChar) return false;
            if (re.lower.test(cChar)) return char.toLowerCase() === cChar;
            return re.subs.test(char);
        }
        return char === cChar;
    });
}
