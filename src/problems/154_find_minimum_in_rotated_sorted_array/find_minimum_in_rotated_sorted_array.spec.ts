const {
    findMin,
    getArrayWithoutRepetitions,
} = require("./find_minimum_in_rotated_sorted_array");

describe("getArrayWithoutRepetitions", () => {
    it.each([
        [
            [1, 3, 4],
            [1, 3, 4],
        ],
        [
            [1, 3, 4, 4],
            [1, 3, 4],
        ],
        [
            [1, 1, 3, 4, 4],
            [1, 3, 4],
        ],
        [[1, 1, 1], [1]],
        [
            [-1, -1, 1, 1, 1],
            [-1, 1],
        ],
        [
            [4, 5, 6, 7, 0, 1, 4],
            [4, 5, 6, 7, 0, 1],
        ],
    ])("getArrayWithoutRepetitions(%s) should be %s", (input, output) => {
        expect(getArrayWithoutRepetitions(input)).toEqual(output);
    });
});

describe("findMin", () => {
    it.each([
        [[1, 3, 5], 1],
        [[1, 3], 1],
        [[3, 5, 1], 1],
        [[3, 5, -1, 0, 1], -1],
        [[3, 5, 1], 1],
        [[3, 5, 1], 1],
        [[3, 5, 1], 1],
        [[4, 5, 6, 7, 0, 1, 3], 0],
        [[1], 1],
        [[1, 2], 1],
        [[4, 5, 6, 7, 0, 1, 4], 0],
        [[0, 0, 0], 0],
        [[0], 0],
        [[-1, -1, -1, 0, -1, -1, -1], -1],
        [[2, 2, 2, 0, 1], 0],
    ])("findMin(%s) should be %s", (input, output) => {
        expect(findMin(input)).toEqual(output);
    });
});
