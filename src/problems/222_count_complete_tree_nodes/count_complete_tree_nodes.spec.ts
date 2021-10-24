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
const treeOf6 = new TreeNode(6, treeOfThree31, treeOfTwo);
const treeOf7 = new TreeNode(7, treeOfThree31, treeOfThree32);

describe("checkIfExists", () => {
    it.each([
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
        [[null, 2], false],
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
    ])("countNodes(%s) should be %s", (input, output) => {
        expect(countNodes(input)).toEqual(output);
    });
});
