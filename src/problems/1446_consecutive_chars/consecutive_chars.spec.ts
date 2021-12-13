const { maxPower } = require("./consecutive_chars");

describe("maxPower", () => {
    it.each([
        ["a", 1],
        ["babad", 1],
        ["ccc", 3],
        ["dcccd", 3],
        ["dcacd", 1],
        ["cbbd", 2],
        ["hooraaaaaaaaaaay", 11],
    ])("maxPower(%s) should be %s", (input, output) => {
        expect(maxPower(input)).toEqual(output);
    });
});
