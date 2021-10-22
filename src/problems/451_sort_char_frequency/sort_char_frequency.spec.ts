const { frequencySort } = require("./sort_char_frequency");

describe("frequencySort", () => {
    it.each([
        ["aabbccc", "cccaabb"],
        ["olalan", "llaaon"],
        ["olalana", "aaallon"],
        ["cbbaaa", "aaabbc"],
        ["Aabb", "bbAa"],
    ])("frequencySort(%s) should be %s", (input, output) => {
        expect(frequencySort(input)).toEqual(output);
    });
});
