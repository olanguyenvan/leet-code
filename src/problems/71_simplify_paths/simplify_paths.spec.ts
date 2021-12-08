const { simplifyPath } = require("./simplify_paths");

describe("simplifyPath", () => {
    it.each([
        ["/a/./b/../../c/", "/c"],
        ["home/", "/home"],
        ["/a/b/c/../d", "/a/b/d"],
        ["/../", "/"],
        ["/home//foo/", "/home/foo"],
        ["/home/", "/home"],
        ["/../..", "/"],
        ["../..", "/"],
    ])("simplifyPath(%s) should be %s", (input, output) => {
        expect(simplifyPath(input)).toEqual(output);
    });
});
