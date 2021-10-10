const { longestCommonSubsequence } = require("./longest-common-subsequence");

describe("longestCommonSubsequence", () => {
    it.each([
        [["abc", "a"], 1],
        [["abc", "ab"], 2],
        [["abc", "abc"], 3],
        [["abc", "def"], 0],
        [["abc", "abcdef"], 3],
        [["abcdef", "c"], 1],
        [["a", "d"], 0],
        [["a", "a"], 1],
        [["a", "ad"], 1],
        [["a", "aaaa"], 1],
        [["abcdef", "acef"], 4],
        [["abcdef", "acef"], 4],
        [["abcdef", "gf"], 1],
        [["acef", "abcdef"], 4],
        [["ace", "abcdef"], 3],
    ])("longestCommonSubsequence(%s) should be %s", (input, output) => {
        expect(longestCommonSubsequence(...input)).toEqual(output);
    });
});
