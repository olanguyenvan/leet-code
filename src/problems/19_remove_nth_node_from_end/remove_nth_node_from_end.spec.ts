const { removeNthFromEnd } = require("./remove_nth_node_from_end");
import {
    createLinkedList,
    linkedListToArray,
} from "../../test-utils/linked-list";

describe("removeNthFromEnd", () => {
    test("null returns null", () => {
        expect(removeNthFromEnd(null)).toStrictEqual(null);
    });

    it.each([
        [
            [[5, 6, 7, 8, 9], 3],
            [5, 6, 8, 9],
        ],
        [
            [[5, 7, 9], 3],
            [7, 9],
        ],
        [
            [[5, 7, 9], 2],
            [5, 9],
        ],
        [
            [[5, 7, 9], 1],
            [5, 7],
        ],
        [
            [[1, 2, 3, 4, 5, 6, 7, 8, 9], 3],
            [1, 2, 3, 4, 5, 6, 8, 9],
        ],

        [
            [[1, 2, 3, 4, 5, 6, 7, 8, 9], 9],
            [2, 3, 4, 5, 6, 7, 8, 9],
        ],
        [[[1], 1], []],
    ])("removeNthFromEnd(%s) should be %s", (input, output: number[]) => {
        const [list, n] = input;
        const linkedList = createLinkedList(list);
        const result = removeNthFromEnd(linkedList, n);

        expect(linkedListToArray(result)).toEqual(output);
    });
});
