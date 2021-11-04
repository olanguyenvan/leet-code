import TreeNode from "../../structures/binary-tree";

export function sumOfLeftLeaves(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    const toTraverse: TreeNode[] = [root];
    let sum = 0;

    while (toTraverse.length !== 0) {
        const current = toTraverse.shift()!;

        const left = current.left;

        if (left && !left.right && !left.left) {
            sum += left.val;
        }

        if (current.left) {
            toTraverse.push(current.left);
        }

        if (current.right) {
            toTraverse.push(current.right);
        }
    }
    return sum;
}
