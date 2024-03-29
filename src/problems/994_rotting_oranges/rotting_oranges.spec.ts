const { getNeighbours, orangesRotting } = require("./rotting_oranges");

describe("orangesRotting", () => {
    it.each([
        [[[0]], 0],
        [
            [
                [2, 1, 1],
                [0, 1, 1],
                [1, 0, 1],
            ],
            -1,
        ],
        [[[0, 2]], 0],
        [[[0, 1]], -1],
        [[[2, 1]], 1],
        [[[2, 2]], 0],
        [
            [
                [0, 0, 2, 1],
                [2, 1, 0, 1],
                [0, 0, 0, 1],
                [0, 0, 0, 0],
            ],
            3,
        ],
        [
            [
                [2, 1, 1, 1],
                [0, 0, 0, 1],
                [1, 0, 0, 1],
                [1, 1, 1, 1],
            ],
            10,
        ],
        [
            [
                [2, 1, 1, 1],
                [0, 0, 0, 1],
                [1, 1, 0, 1],
                [1, 0, 0, 1],
                [1, 1, 1, 1],
            ],
            13,
        ],
        [
            [
                [2, 1, 1, 1],
                [0, 0, 0, 1],
                [1, 2, 0, 1],
                [1, 0, 0, 1],
                [1, 1, 1, 1],
            ],
            6,
        ],
        [[[2, 1, 1, 1]], 3],
        [[[2, 1, 1, 1, 1, 1, 1, 1, 1, 2]], 4],
        [[new Array(200).fill(1)], -1],
        [[new Array(200).fill(2)], 0],
        [
            [
                [2, 2],
                [1, 1],
                [0, 0],
                [2, 0],
            ],
            1,
        ],
    ])("orangesRotting(%s) should be %s", (input, output) => {
        expect(orangesRotting(input)).toEqual(output);
    });
});
