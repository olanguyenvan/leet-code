export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export function sumNumbers(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    return sumNumbersRec(root)[0];

    function sumNumbersRec(node: TreeNode): [number, number[]] {
        let tmpArray: number[];

        let sum = 0;

        if (!node.left && !node.right) {
            tmpArray = [1];
        } else {
            let leftLeaves: number[] = [];
            let rightLeaves: number[] = [];

            if (node.left) {
                const leftResult = sumNumbersRec(node.left);
                sum += leftResult[0];
                leftLeaves = leftResult[1];
            }
            if (node.right) {
                const rightResult = sumNumbersRec(node.right);
                sum += rightResult[0];
                rightLeaves = rightResult[1];
            }

            tmpArray = new Array(
                Math.max(rightLeaves.length, leftLeaves.length) + 1
            ).fill(0);

            for (let i = 0; i < rightLeaves.length; i++) {
                tmpArray[i + 1] += rightLeaves[i];
            }
            for (let i = 0; i < leftLeaves.length; i++) {
                tmpArray[i + 1] += leftLeaves[i];
            }
        }

        // sum the tmp array
        const currentDigit = node.val;
        for (let i = 0; i < tmpArray.length; i++) {
            sum += currentDigit * tmpArray[i] * Math.pow(10, i);
        }
        return [sum, tmpArray];
    }
}
