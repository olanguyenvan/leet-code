const { numSquares } = require("./sum_perfect_squares");

describe("numSquares", () => {
    it.each([
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 1],
        [5, 2],
        [8, 2],
        [9, 1],
        [12, 3],
        [13, 2],
        [15, 4], // 9 + 4 + 1 + 1
        [16, 1],
        [100, 1],
    ])("numSquares(%s) should be %s", (input, output) => {
        expect(numSquares(input)).toEqual(output);
    });
});
