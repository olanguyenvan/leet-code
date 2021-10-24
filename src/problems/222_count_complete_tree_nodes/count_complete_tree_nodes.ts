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

function countHeight(root: TreeNode | null): number {
    let height = 0;
    let tmpToCountHeight = root;

    while (tmpToCountHeight) {
        tmpToCountHeight = tmpToCountHeight.left;
        height++;
    }
    return height;
}

function getBin(n: number): string {
    return (n >>> 0).toString(2);
}

export function checkIfExists(root: TreeNode | null, index: number) {
    const indexToFindBin = getBin(index);

    let indexOfString = 1;
    let tmp = root;

    // console.log()
    while (indexOfString < indexToFindBin.length) {
        if (!tmp) {
            return false;
        }

        if (indexToFindBin[indexOfString] === "0") {
            tmp = tmp.left;
        } else {
            tmp = tmp.right;
        }

        indexOfString++;
    }

    return !!tmp;
}

export function countNodes(root: TreeNode | null): number {
    const height = countHeight(root);

    if (height === 0) {
        return 0;
    }

    let leftIndex = Math.pow(2, height - 1);
    let rightIndex = Math.pow(2, height) - 1;

    let count = 0;
    let middleIndex: number = leftIndex;

    while (leftIndex !== rightIndex) {
        if (rightIndex - leftIndex === 1) {
            if (checkIfExists(root, rightIndex)) {
                return rightIndex;
            } else if (checkIfExists(root, leftIndex)) {
                return leftIndex;
            }
        }

        middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        const exists = checkIfExists(root, middleIndex);

        if (exists) {
            leftIndex = middleIndex;
        } else {
            rightIndex = middleIndex;
        }
    }

    return middleIndex;
}
