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

    let orangesToRot = 0;
    const rottenOrangesToTraverse: [number, number, number][] = new Array();

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const cell = grid[i][j];

            if (cell === FRESH_ORANGE_CELL) {
                orangesToRot++;
            } else if (cell === ROTTEN_ORANGE_CELL) {
                rottenOrangesToTraverse.push([i, j, 0]);
            }
        }
    }

    let maximumRottingTime = 0;

    while (rottenOrangesToTraverse.length !== 0) {
        const rottenOrange = rottenOrangesToTraverse.shift()!;

        const [i, j, rottingTime] = rottenOrange;
        maximumRottingTime = Math.max(maximumRottingTime, rottingTime);

        const neighbours = getNeighbours(i, j);

        for (const [neighbour_i, neighbour_j] of neighbours.values()) {
            if (grid[neighbour_i][neighbour_j] === FRESH_ORANGE_CELL) {
                orangesToRot--;
                grid[neighbour_i][neighbour_j] = ROTTEN_ORANGE_CELL;
                rottenOrangesToTraverse.push([
                    neighbour_i,
                    neighbour_j,
                    rottingTime + 1,
                ]);
            }
        }
    }

    if (orangesToRot !== 0) {
        return -1;
    }

    return maximumRottingTime;
}
