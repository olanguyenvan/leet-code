const {
    TreeNode,
    countNodes,
    checkIfExists,
} = require("./count_complete_tree_nodes");

const treeOfOne10 = new TreeNode(10, null, null);
const treeOfOne11 = new TreeNode(11, null, null);
const treeOfOne12 = new TreeNode(12, null, null);

const treeOfTwo = new TreeNode(2, treeOfOne10);
const treeOfThree31 = new TreeNode(31, treeOfOne11, treeOfOne12);
const treeOfThree32 = new TreeNode(32, treeOfOne11, treeOfOne12);

const treeOf4 = new TreeNode(4, treeOfTwo, treeOfOne11);
const treeOf5 = new TreeNode(5, treeOfThree31, treeOfOne11);
const treeOf6 = new TreeNode(6, treeOfThree31, treeOfTwo);
const treeOf7 = new TreeNode(7, treeOfThree31, treeOfThree32);
const treeOf8 = new TreeNode(8, treeOf4, treeOfThree31);
const treeOf9 = new TreeNode(9, treeOf5, treeOfThree31);
const treeOf10 = new TreeNode(10, treeOf6, treeOfThree31);
const treeOf11 = new TreeNode(11, treeOf7, treeOfThree31);
const treeOf12 = new TreeNode(12, treeOf7, treeOf4);
const treeOf13 = new TreeNode(13, treeOf7, treeOf5);
const treeOf14 = new TreeNode(14, treeOf7, treeOf6);
const treeOf15 = new TreeNode(15, treeOf7, treeOf7);
const treeOf16 = new TreeNode(16, treeOf8, treeOf7);
const treeOf20 = new TreeNode(20, treeOf12, treeOf7);
const treeOf26 = new TreeNode(26, treeOf15, treeOf10);
const treeOf27 = new TreeNode(27, treeOf15, treeOf11);
const treeOf28 = new TreeNode(28, treeOf15, treeOf12);
const treeOf31 = new TreeNode(31, treeOf15, treeOf15);
const treeOf32 = new TreeNode(31, treeOf16, treeOf15);

describe("checkIfExists", () => {
    it.each([
        [[null, 2], false],
        [[treeOfTwo, 1], true],
        [[treeOfTwo, 2], true],
        [[treeOfTwo, 3], false],
        [[treeOf4, 3], true],
        [[treeOf4, 4], true],
        [[treeOf4, 5], false],
        [[treeOf6, 1], true],
        [[treeOf6, 3], true],
        [[treeOf6, 5], true],
        [[treeOf6, 6], true],
        [[treeOf6, 7], false],
        [[treeOf6, 10], false],
        [[treeOf26, 25], true],
        [[treeOf26, 26], true],
    ])("checkIfExists(%s) should be %s", (input, output) => {
        expect(checkIfExists(...input)).toEqual(output);
    });
});

describe("countNodes", () => {
    it.each([
        [null, 0],
        [treeOfOne10, 1],
        [treeOfTwo, 2],
        [treeOfThree31, 3],
        [treeOfThree32, 3],
        [treeOf4, 4],
        [treeOf6, 6],
        [treeOf7, 7],
        [treeOf8, 8],
        [treeOf9, 9],
        [treeOf10, 10],
        [treeOf11, 11],
        [treeOf12, 12],
        [treeOf13, 13],
        [treeOf14, 14],
        [treeOf15, 15],
        [treeOf16, 16],
        [treeOf20, 20],
        [treeOf26, 26],
        [treeOf27, 27],
        [treeOf28, 28],
        [treeOf31, 31],
        [treeOf32, 32],
    ])("countNodes(%s) should be %s", (input, output) => {
        expect(countNodes(input)).toEqual(output);
    });
});
