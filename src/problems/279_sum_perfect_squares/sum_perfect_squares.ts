export function numSquares(n: number): number {
    const getClosestSquareRoot = (x: number) => Math.floor(Math.sqrt(x));

    const minSumElements: number[] = new Array(n).fill(n);

    for (let i = 1; i <= getClosestSquareRoot(n); i++) {
        const index = i * i - 1;
        minSumElements[index] = 1;
    }

    for (let i = 2; i <= n; i++) {
        if (minSumElements[i - 1] === 1) {
            continue;
        }

        minSumElements[i - 1] = i;

        for (let j = 1; j <= i / 2; j++) {
            const tmpSum = minSumElements[j - 1] + minSumElements[i - j - 1];

            minSumElements[i - 1] = Math.min(tmpSum, minSumElements[i - 1]);
        }
    }

    return minSumElements[n - 1];
}
