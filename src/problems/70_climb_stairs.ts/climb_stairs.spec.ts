const {
    climbStairsFibIterative,
    clibmStairsFibRecursive,
} = require("./climb_stairs");

const testCases = [
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 5],
    [5, 8],
    [6, 13],
];

describe("clibmStairsFibRecursive", () => {
    it.each(testCases)(
        "clibmStairsFibRecursive(%s) should be %s",
        (input, output) => {
            expect(clibmStairsFibRecursive(input)).toEqual(output);
        }
    );
});

describe("climbStairsFibIterative", () => {
    it.each(testCases)(
        "climbStairsFibIterative(%s) should be %s",
        (input, output) => {
            expect(climbStairsFibIterative(input)).toEqual(output);
        }
    );
});
