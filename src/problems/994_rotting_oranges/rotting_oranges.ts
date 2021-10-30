const FRESH_ORANGE_CELL = 1;
const ROTTEN_ORANGE_CELL = 2;

export function orangesRotting(grid: number[][]): number {
    const height = grid.length;
    const width = grid[0].length;

    function getNeighbours(i: number, j: number): [number, number][] {
        const neighbours: [number, number][] = [];

        if (i - 1 >= 0) {
            neighbours.push([i - 1, j]);
        }
        if (i + 1 < height) {
            neighbours.push([i + 1, j]);
        }

        if (j - 1 >= 0) {
            neighbours.push([i, j - 1]);
        }
        if (j + 1 < width) {
            neighbours.push([i, j + 1]);
        }

        return neighbours;
    }

    const initialFreshOrangesCell: Set<[number, number]> = new Set();
    const rottenOranges: [number, number][] = new Array();

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const cell = grid[i][j];

            if (cell === FRESH_ORANGE_CELL) {
                initialFreshOrangesCell.add([i, j]);
            }

            if (cell === ROTTEN_ORANGE_CELL) {
                rottenOranges.push([i, j]);
            }
        }
    }

    const rottingTime: number[][] = Array.from(Array(height), () =>
        new Array(width).fill(0)
    );

    while (rottenOranges.length !== 0) {
        const rottenOrange = rottenOranges.shift()!;

        const [i, j] = rottenOrange;

        const neighbours = getNeighbours(i, j);
        const nextRottingTime = rottingTime[i][j] + 1;

        for (const [neighbour_i, neighbour_j] of neighbours.values()) {
            if (grid[neighbour_i][neighbour_j] === FRESH_ORANGE_CELL) {
                rottingTime[neighbour_i][neighbour_j] = nextRottingTime;
                grid[neighbour_i][neighbour_j] = ROTTEN_ORANGE_CELL;
                rottenOranges.push([neighbour_i, neighbour_j]);
            }
        }
    }

    let maximumRotingTime = 0;

    for (const [i, j] of initialFreshOrangesCell.values()) {
        const cell = grid[i][j];

        if (cell === FRESH_ORANGE_CELL) {
            return -1;
        }

        if (cell === ROTTEN_ORANGE_CELL) {
            maximumRotingTime = Math.max(maximumRotingTime, rottingTime[i][j]);
        }
    }

    return maximumRotingTime;
}
