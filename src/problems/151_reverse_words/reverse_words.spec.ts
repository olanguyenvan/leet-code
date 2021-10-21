const { removeExtraSpaces, reverseWords } = require("./reverse_words");

describe("reverseWords", () => {
    it.each([
        ["Bob loves Alice", "Alice loves Bob"],
        ["Ola", "Ola"],
        ["Ola Lan", "Lan Ola"],
        ["  Bob    Loves  Alice   ", "Alice Loves Bob"],
        ["a b c d e f", "f e d c b a"],
    ])("reverseWords(%s) should be %s", (input, output) => {
        expect(reverseWords(input)).toEqual(output);
    });
});

describe("removeExtraSpaces", () => {
    it.each([
        ["Bob loves Alice", "Bob loves Alice"],
        ["Ola", "Ola"],
        ["Ola Lan", "Ola Lan"],
        ["  Bob    Loves  Alice   ", "Bob Loves Alice"],
        [" Bob    Loves  Alice   ", "Bob Loves Alice"],
        ["a b c d e f", "a b c d e f"],
    ])("removeExtraSpaces(%s) should be %s", (input, output) => {
        expect(removeExtraSpaces(input)).toEqual(output);
    });
});
