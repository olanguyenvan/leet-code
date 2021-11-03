import {
    createLinkedList,
    linkedListToArray,
} from "../../test-utils/linked-list";

const {
    insertToSortedList,
    mergeKLists,
    ListNode,
} = require("./merge_k_sorted_lists");

describe("insertToSortedList", () => {
    test("insert to empty", () => {
        const list = <typeof ListNode>[];
        const node = new ListNode(3);

        insertToSortedList(list, node);

        expect(list).toStrictEqual([node]);
    });
    test("insert to front", () => {
        const node4 = new ListNode(4);
        const list = [node4];
        const node = new ListNode(3);

        insertToSortedList(list, node);

        expect(list).toStrictEqual([node, node4]);
    });

    test("insert to front with many values", () => {
        const node4 = new ListNode(4);
        const node5 = new ListNode(5);
        const node6 = new ListNode(6);
        const node7 = new ListNode(7);
        const node8 = new ListNode(8);
        const list = [node4, node5, node6, node7, node8];
        const node = new ListNode(3);

        insertToSortedList(list, node);

        expect(list).toStrictEqual([node, node4, node5, node6, node7, node8]);
    });

    test("insert to middle with many values", () => {
        const node4 = new ListNode(4);
        const node5 = new ListNode(5);
        const node6 = new ListNode(6);
        const node7 = new ListNode(7);
        const node8 = new ListNode(8);
        const list = [node4, node5, node6, node7, node8];
        const node = new ListNode(6);

        insertToSortedList(list, node);

        expect(list).toStrictEqual([node4, node5, node, node6, node7, node8]);
    });

    test("insert to back with many values", () => {
        const node4 = new ListNode(4);
        const node5 = new ListNode(5);
        const node6 = new ListNode(6);
        const node7 = new ListNode(7);
        const node8 = new ListNode(8);
        const list = [node4, node5, node6, node7, node8];
        const node = new ListNode(10);

        insertToSortedList(list, node);

        expect(list).toStrictEqual([node4, node5, node6, node7, node8, node]);
    });
});

describe("mergeKLists", () => {
    test("null returns null", () => {
        expect(mergeKLists(null)).toStrictEqual(null);
    });

    test("1 list with one node: returns itself", () => {
        const linkedList = createLinkedList([3]);

        const result = mergeKLists([linkedList]);
        const expected = [3];
        expect(linkedListToArray(result)).toStrictEqual(expected);
    });

    test("1 list with many nodes: returns itself", () => {
        const list = [1, 2, 3];
        const linkedList = createLinkedList(list);

        const result = mergeKLists([linkedList]);
        expect(linkedListToArray(result)).toStrictEqual(list);
    });

    test("2 lists with many nodes", () => {
        const list1 = [1, 2, 3];
        const list2 = [4, 5, 6];
        const linkedList1 = createLinkedList(list1);
        const linkedList2 = createLinkedList(list2);

        const expected = [1, 2, 3, 4, 5, 6];
        const result = mergeKLists([linkedList1, linkedList2]);
        expect(linkedListToArray(result)).toStrictEqual(expected);
    });

    test("3 lists with many nodes that have values from different ranges", () => {
        const list1 = [1, 2, 3];
        const list2 = [4, 5, 6];
        const list3 = [7, 8, 9];
        const linkedList1 = createLinkedList(list1);
        const linkedList2 = createLinkedList(list2);
        const linkedList3 = createLinkedList(list3);

        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = mergeKLists([linkedList1, linkedList2, linkedList3]);
        expect(linkedListToArray(result)).toStrictEqual(expected);
    });

    test("3 lists with intertwining elements", () => {
        const list1 = [1, 3, 5];
        const list2 = [2, 8, 9];
        const list3 = [4, 6, 7];
        const linkedList1 = createLinkedList(list1);
        const linkedList2 = createLinkedList(list2);
        const linkedList3 = createLinkedList(list3);

        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = mergeKLists([linkedList1, linkedList2, linkedList3]);
        expect(linkedListToArray(result)).toStrictEqual(expected);
    });

    test("4 lists where some are null", () => {
        const list1 = [1, 3, 5];
        const list2 = [2, 8, 9];
        const list3 = [4, 6, 7];
        const linkedList1 = createLinkedList(list1);
        const linkedList2 = createLinkedList(list2);
        const linkedList3 = createLinkedList(list3);

        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = mergeKLists([
            linkedList1,
            linkedList2,
            linkedList3,
            null,
        ]);
        expect(linkedListToArray(result)).toStrictEqual(expected);
    });

    test("lists with repeated values", () => {
        const list1 = [1, 4, 5];
        const list2 = [1, 3, 4];
        const list3 = [2, 6];
        const linkedList1 = createLinkedList(list1);
        const linkedList2 = createLinkedList(list2);
        const linkedList3 = createLinkedList(list3);

        const expected = [1, 1, 2, 3, 4, 4, 5, 6];
        const result = mergeKLists([linkedList1, linkedList2, linkedList3]);
        expect(linkedListToArray(result)).toStrictEqual(expected);
    });
});
