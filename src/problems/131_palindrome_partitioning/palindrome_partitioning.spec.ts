const { partition } = require("./palindrome_partitioning");

describe("partition", () => {
    it.each([
        [
            "aab",
            [
                ["a", "a", "b"],
                ["aa", "b"],
            ],
        ],
        ["olo", [["o", "l", "o"], ["olo"]]],
        ["oo", [["o", "o"], ["oo"]]],
        [
            "ooa",
            [
                ["o", "o", "a"],
                ["oo", "a"],
            ],
        ],
        ["tenet", [["t", "e", "n", "e", "t"], ["t", "ene", "t"], ["tenet"]]],
    ])("partition(%s) should be %s", (input, output) => {
        expect(partition(input)).toEqual(output);
    });
});
