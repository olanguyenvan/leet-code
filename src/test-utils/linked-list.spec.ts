import { createLinkedList, linkedListToArray } from "./linked-list";

describe("createLinkedList", () => {
    test("[] returns null", () => {
        expect(createLinkedList([])).toBeNull();
    });

    test("[1]", () => {
        const initial = [1];
        const result = createLinkedList(initial);

        expect(linkedListToArray(result)).toStrictEqual(initial);
    });

    test("[1, 2]", () => {
        const initial = [1, 2];
        const result = createLinkedList(initial);

        expect(linkedListToArray(result)).toStrictEqual(initial);
    });

    test("[1, 2, 3]", () => {
        const initial = [1, 2, 3];
        const result = createLinkedList(initial);

        expect(linkedListToArray(result)).toStrictEqual(initial);
    });
});
