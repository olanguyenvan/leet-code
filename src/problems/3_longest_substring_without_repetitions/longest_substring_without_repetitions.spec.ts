const {
    lengthOfLongestSubstring,
} = require("./longest_substring_without_repetitions");

describe("lengthOfLongestSubstring", () => {
    it.each([
        ["a", 1],
        ["ccc", 1],
        ["babad", 3],
        ["abcbad", 4],
        ["ac", 2],
        ["aabcdef", 6],
        ["pwwkew", 3],
        ["", 0],
        ["abcabcbb", 3],
    ])("lengthOfLongestSubstring(%s) should be %s", (input, output) => {
        expect(lengthOfLongestSubstring(input)).toEqual(output);
    });
});
