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
        const currentDigit = node.val;

        if (!node.left && !node.right) {
            // current node is leaf
            const leavesByLevel = [1];
            return [currentDigit, leavesByLevel];
        }

        let sum = 0;
        let leavesFromLeft: number[] = [];
        let leavesFromRight: number[] = [];

        if (node.left) {
            const leftResult = sumNumbersRec(node.left);
            sum += leftResult[0];
            leavesFromLeft = leftResult[1];
        }
        if (node.right) {
            const rightResult = sumNumbersRec(node.right);
            sum += rightResult[0];
            leavesFromRight = rightResult[1];
        }

        // [0, 0, 1] means there is one leaf separated by chain of 2 nodes
        // currentNode -> next -> next -> leaf
        let leavesByLevel: number[];

        if (leavesFromRight.length > leavesFromLeft.length) {
            leavesByLevel = leavesFromRight;
            for (let i = 0; i < leavesFromLeft.length; i++) {
                leavesByLevel[i] += leavesFromLeft[i];
            }
        } else {
            leavesByLevel = leavesFromLeft;
            for (let i = 0; i < leavesFromRight.length; i++) {
                leavesByLevel[i] += leavesFromRight[i];
            }
        }

        // current node is not a leaf, therefore there's no leaf on level 0
        leavesByLevel.unshift(0);

        for (let i = 0; i < leavesByLevel.length; i++) {
            sum += currentDigit * leavesByLevel[i] * Math.pow(10, i);
        }
        return [sum, leavesByLevel];
    }
}
