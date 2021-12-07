const { groupAnagrams } = require("./group_anagrams");

describe("groupAnagrams", () => {
    it.each([
        [["ba", "ab"], [["ba", "ab"]]],
        [
            ["eat", "tea", "tan", "ate", "nat", "bat"],
            [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
        ],
        [
            ["ola", "lan"],
            [["ola"], ["lan"]],
        ],
        [
            ["ola", "lan", "nal"],
            [["ola"], ["lan", "nal"]],
        ],
    ])("groupAnagrams(%s) should be %s", (input, output) => {
        expect(groupAnagrams(input)).toEqual(output);
    });
});
