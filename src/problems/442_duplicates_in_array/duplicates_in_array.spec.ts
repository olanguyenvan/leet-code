const { findDuplicates } = require("./duplicates_in_array");

describe("findDuplicates", () => {
    it.each([
        [[1], []],
        [[1, 2], []],
        [[1, 1], [1]],
        [[2, 2], [2]],
        [
            [2, 2, 4, 4],
            [2, 4],
        ],
        [
            [2, 2, 4, 4],
            [2, 4],
        ],

        [[4, 4, 4, 4], [4]],
        [
            [4, 4, 2, 2],
            [4, 2],
        ],
        [[4, 4, 2, 1], [4]],
        [[5, 5, 5, 2, 1], [5]],
        [
            [5, 4, 5, 3, 3],
            [5, 3],
        ],
        [[1, 2, 3, 3], [3]],
        [
            [4, 3, 2, 7, 8, 2, 3, 1],
            [3, 2],
        ],
    ])("findDuplicates(%s) should be %s", (input, output) => {
        expect(findDuplicates(input)).toEqual(output);
    });
});
