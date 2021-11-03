import ListNode from "../structures/linked-list";

export function createLinkedList(nums: number[]): ListNode | null {
    if (nums.length === 0) {
        return null;
    }

    let head = null;

    for (let i = nums.length - 1; i >= 0; i--) {
        head = new ListNode(nums[i], head);
    }

    return head;
}

export function linkedListToArray(list: ListNode | null): number[] {
    const result = [];

    let tmp = list;
    while (tmp) {
        result.push(tmp.val);
        tmp = tmp.next;
    }

    return result;
}
