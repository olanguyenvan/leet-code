const CAPTURED = "X";

type coordinates = [number, number];

type toCaptureStruct = {
    list: coordinates[];
    matrix: boolean[][];
};

export function capture(board: string[][], indices: coordinates[]): void {
    for (const [x, y] of indices) {
        board[x][y] = CAPTURED;
    }
}

/**
 Do not return anything, modify board in-place instead.
 */
export function solve(board: string[][]): void {
    const height = board.length;
    const width = board[0].length;
    const visited: boolean[][] = Array.from({ length: height }, () =>
        new Array(width).fill(false)
    );

    function getNeighbours(i: number, j: number): coordinates[] {
        const neighbours: coordinates[] = [];

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

    function isOnTheWall(cell: coordinates): boolean {
        const [i, j] = cell;

        return i === 0 || i === height - 1 || j === 0 || j === width - 1;
    }

    function isCaptured(cell: coordinates): boolean {
        const [i, j] = cell;

        return board[i][j] === CAPTURED;
    }

    function initializeToCapture(): toCaptureStruct {
        const list: coordinates[] = [];
        const matrix: boolean[][] = Array.from({ length: height }, () =>
            new Array(width).fill(false)
        );

        return { list, matrix };
    }

    function addToCapture(toCapture: toCaptureStruct, cell: coordinates) {
        const [i, j] = cell;

        toCapture.list.push(cell);
        toCapture.matrix[i][j] = true;
    }

    function willBeCaptured(toCapture: toCaptureStruct, cell: coordinates) {
        const [i, j] = cell;

        return toCapture.matrix[i][j];
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (visited[i][j]) {
                continue;
            }
            visited[i][j] = true;

            const toCapture = initializeToCapture();
            const toTraverse: coordinates[] = [[i, j]];
            let canCapture = true;

            while (toTraverse.length !== 0 && canCapture) {
                const currentCell = toTraverse.shift()!;
                const [currentCell_i, currentCell_j] = currentCell;

                visited[currentCell_i][currentCell_j] = true;

                if (isOnTheWall(currentCell)) {
                    canCapture = false;
                    break;
                }

                if (isCaptured(currentCell)) {
                    continue;
                }

                addToCapture(toCapture, currentCell);

                const neighbours = getNeighbours(currentCell_i, currentCell_j);

                for (const neighbour of neighbours) {
                    if (isCaptured(neighbour)) {
                        continue;
                    }

                    if (willBeCaptured(toCapture, neighbour)) {
                        continue;
                    }

                    const [neighbour_i, neighbour_j] = neighbour;
                    const willBeTraversed = toTraverse.find(
                        (indices) =>
                            indices[0] === neighbour_i &&
                            indices[1] === neighbour_j
                    );

                    if (willBeTraversed) {
                        continue;
                    }

                    toTraverse.push(neighbour);
                }
            }

            if (canCapture) {
                capture(board, toCapture.list);
            }
        }
    }
}
