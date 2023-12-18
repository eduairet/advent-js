export function transformTree(tree: (number | null)[]) {
    if (tree.length === 0 || tree[0] === null) return null;
    interface Node {
        value: number | null;
        left: Node | null;
        right: Node | null;
    }
    const newNode = (value: number | null): Node => {
        return {
            value,
            left: null,
            right: null,
        };
    };
    let root: Node | null = null;
    const addNode = (tree: (number | null)[], i: number): Node | null => {
        let root = null;
        if (i < tree.length) {
            root = newNode(tree[i]);
            if (root.value === null) return null;
            root.left = addNode(tree, 2 * i + 1);
            root.right = addNode(tree, 2 * i + 2);
        }
        return root;
    };
    root = addNode(tree, 0);
    return root;
}
