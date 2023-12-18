export function transformTree(tree: (number | null)[]) {
    interface Node {
        value: number | null;
        left: Node | null;
        right: Node | null;
    }
    let root: Node | null = null;
    const addNode = (tree: (number | null)[], i: number): Node | null => {
        let root = null;
        if (i < tree.length) {
            root = { value: tree[i], left: null, right: null };
            if (root.value === null) return null;
            // @ts-ignore
            root.left = addNode(tree, 2 * i + 1);
            // @ts-ignore
            root.right = addNode(tree, 2 * i + 2);
        }
        return root;
    };
    root = addNode(tree, 0);
    return root;
}
