const { plusOne } = require("./plus-one");

describe("plusOne", () => {
    it.each([
        [
            [4, 2],
            [4, 3],
        ],
        [[4], [5]],
        [[9], [1, 0]],
        [
            [9, 9],
            [1, 0, 0],
        ],
        [
            [5, 9, 9],
            [6, 0, 0],
        ],
        [[0], [1]],
    ])("plusOne(%s) should be %s", (input, output) => {
        expect(plusOne(input)).toEqual(output);
    });
});
