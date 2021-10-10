const { sqrt_int } = require("./sqrt-int");

describe("sqrt_int", () => {
    it.each([
        [4, 2],
        [2, 1],
        [9, 3],
        [1, 1],
        [10, 3],
        [100, 10],
        [8, 2],
        [7, 2],
        [0, 0],
    ])("sqrt_int(%s) should be %s", (input, output) => {
        expect(sqrt_int(input)).toEqual(output);
    });
});
