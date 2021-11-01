export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

export function insertToSortedList(list: ListNode[], node: ListNode): void {
    function findIndex(a: number, b: number): number {
        if (a === b) {
            return a;
        }

        const middle = Math.floor((a + b) / 2);

        if (list[middle].val <= node.val) {
            return findIndex(middle + 1, b);
        }
        return findIndex(a, middle);
    }

    const i = findIndex(0, list.length);

    list.splice(i, 0, node);
}

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists === null || lists.length === 0) {
        return null;
    }

    const heads: ListNode[] = [];

    for (const list of lists) {
        if (list) {
            insertToSortedList(heads, list);
        }
    }

    let lastNode = new ListNode(-1); // fake node to start
    const mergedList = lastNode;

    while (heads.length !== 0) {
        const smallestValue = heads.shift()!;
        const next = smallestValue?.next;

        if (next) {
            insertToSortedList(heads, next);
        }

        lastNode.next = smallestValue;
        lastNode = lastNode.next;
    }

    return mergedList.next;
}
