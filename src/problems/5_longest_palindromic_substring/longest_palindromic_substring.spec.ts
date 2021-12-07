const { longestPalindrome } = require("./longest_palindromic_substring");

describe("longestPalindrome", () => {
    it.each([
        ["a", "a"],
        ["babad", "bab"],
        ["ccc", "ccc"],
        ["dcccd", "dcccd"],
        ["dcacd", "dcacd"],
        ["abcbad", "abcba"],
        ["ac", "a"],
        ["cbbd", "bb"],
    ])("longestPalindrome(%s) should be %s", (input, output) => {
        expect(longestPalindrome(input)).toEqual(output);
    });
});
