export function climbStairsFibIterative(n: number): number {
    const fibNumbers: number[] = new Array(n);

    fibNumbers[0] = 1;

    fibNumbers[1] = 2;
    for (let i = 2; i < n; i++) {
        fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
    }

    return fibNumbers[n - 1];
}

export function clibmStairsFibRecursive(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }

    if (n < 0) {
        return 0;
    }

    return clibmStairsFibRecursive(n - 1) + clibmStairsFibRecursive(n - 2);
}
