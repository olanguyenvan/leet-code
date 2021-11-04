import TreeNode from "../../structures/binary-tree";
import { sumNumbers } from "./sum_root_to_leaf";

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
    ])("sumNumbers(%s) should be %s", (input, output) => {
        expect(sumNumbers(input)).toEqual(output);
    });
});
