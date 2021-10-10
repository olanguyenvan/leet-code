const { sqrt_int_recursive, sqrt_int_iteration } = require("./sqrt-int");

const testCases = [
    [4, 2],
    [2, 1],
    [9, 3],
    [1, 1],
    [10, 3],
    [100, 10],
    [8, 2],
    [7, 2],
    [0, 0],
];

describe("sqrt_int_recursive", () => {
    it.each(testCases)(
        "sqrt_int_recursive(%s) should be %s",
        (input, output) => {
            expect(sqrt_int_recursive(input)).toEqual(output);
        }
    );
});

describe("sqrt_int_iteration", () => {
    it.each(testCases)(
        "sqrt_int_iteration(%s) should be %s",
        (input, output) => {
            expect(sqrt_int_iteration(input)).toEqual(output);
        }
    );
});
