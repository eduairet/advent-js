export function createChristmasTree(ornaments: string, height: number) {
    let [tree, counter]: [string[], number] = [[], 0];
    for (let i = 0; i < height; i++) {
        const pad = ' '.repeat(height - i - 1);
        let line = Array.from({ length: i + 1 }, () => {
            const val = ornaments[counter % ornaments.length];
            counter++;
            return val;
        }).join(' ');
        tree.push(pad + line);
    }
    tree.push(`${' '.repeat(height - 1)}|\n`);
    return tree.join('\n');
}
