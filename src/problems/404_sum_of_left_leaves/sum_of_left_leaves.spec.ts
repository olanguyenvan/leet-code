import TreeNode from "../../structures/binary-tree";
import { sumOfLeftLeaves } from "./sum_of_left_leaves";

const treeOf0 = new TreeNode(0, null, null);
const treeOf1 = new TreeNode(1, null, null);
const treeOf5 = new TreeNode(5, null, null);
const treeOfOneLeft = new TreeNode(9, treeOf5, treeOf1); // 91 + 95
const treeWithLeftSubtreeAndRight = new TreeNode(4, treeOfOneLeft, treeOf0); // 495 + 491 + 40
const treeOfOneRight = new TreeNode(1, null, treeOf5);

describe("sumOfLeftLeaves", () => {
    it.each([
        [null, 0],
        [treeOf0, 0],
        [treeOf0, 0],
        [treeOf5, 0],
        [treeOfOneLeft, 5],
        [treeWithLeftSubtreeAndRight, 5],
        [treeOfOneRight, 0],
    ])("sumOfLeftLeaves(%s) should be %s", (input, output) => {
        expect(sumOfLeftLeaves(input)).toEqual(output);
    });
});
