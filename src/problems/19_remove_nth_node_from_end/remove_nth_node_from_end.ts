import ListNode from "../../structures/linked-list";

export function removeNthFromEnd(
    head: ListNode | null,
    n: number
): ListNode | null {
    if (!head) {
        return null;
    }

    let movesToMake = n;

    let nodeToHitEnd: ListNode | null = head;

    while (movesToMake > 0 && nodeToHitEnd) {
        nodeToHitEnd = nodeToHitEnd.next;

        movesToMake--;
    }

    let nextToRemove = head;

    if (!nodeToHitEnd) {
        return head.next;
    }

    while (nodeToHitEnd.next) {
        nextToRemove = nextToRemove.next!;
        nodeToHitEnd = nodeToHitEnd.next;
    }

    nextToRemove.next = nextToRemove.next!.next;

    return head;
}
