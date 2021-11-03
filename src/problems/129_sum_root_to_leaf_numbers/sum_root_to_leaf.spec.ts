import { TreeNode, sumNumbers } from "./sum_root_to_leaf";

const treeOf0 = new TreeNode(0, null, null);
const treeOf1 = new TreeNode(1, null, null);
const treeOf5 = new TreeNode(5, null, null);
const treeOf186 = new TreeNode(9, treeOf1, treeOf5); // 91 + 95
const treeOf1026 = new TreeNode(4, treeOf186, treeOf0); // 495 + 491 + 40
const treeOf15 = new TreeNode(1, null, treeOf5);

describe("sumNumbers", () => {
    it.each([
        [null, 0],
        [treeOf0, 0],
        [treeOf0, 0],
        [treeOf5, 5],
        [treeOf186, 186],
        [treeOf1026, 1026],
        [treeOf15, 15],
        // [treeOfTwo, 2],
        // [treeOfThree31, 3],
        // [treeOfThree32, 3],
        // [treeOf4, 4],
        // [treeOf6, 6],
        // [treeOf7, 7],
        // [treeOf8, 8],
        // [treeOf9, 9],
        // [treeOf10, 10],
        // [treeOf11, 11],
        // [treeOf12, 12],
        // [treeOf13, 13],
        // [treeOf14, 14],
        // [treeOf15, 15],
        // [treeOf16, 16],
        // [treeOf20, 20],
        // [treeOf26, 26],
        // [treeOf27, 27],
        // [treeOf28, 28],
        // [treeOf31, 31],
        // [treeOf32, 32],
    ])("sumNumbers(%s) should be %s", (input, output) => {
        expect(sumNumbers(input)).toEqual(output);
    });
});
