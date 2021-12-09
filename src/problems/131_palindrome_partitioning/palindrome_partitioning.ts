export function partition(s: string): string[][] {
    const stringLength = s.length;

    const palindromesStartingAt: { [k: number]: number[] } = {};

    for (let i = 0; i < stringLength; i++) {
        palindromesStartingAt[i] = [];
    }

    for (let i = 0; i < stringLength; i++) {
        // palindromes with odd length
        let left = i;
        let right = i;

        while (left >= 0 && right < stringLength && s[left] === s[right]) {
            palindromesStartingAt[left].push(right - left + 1);
            left--;
            right++;
        }

        // palindromes with even length
        left = i;
        right = i + 1;

        while (left >= 0 && right < stringLength && s[left] === s[right]) {
            palindromesStartingAt[left].push(right - left + 1);
            left--;
            right++;
        }
    }

    const results: string[][] = [];

    function generateResults(acc: string[], i: number): void {
        if (i === stringLength) {
            results.push(acc);
            return;
        }

        for (const nextLength of palindromesStartingAt[i]) {
            generateResults(
                [...acc, s.slice(i, i + nextLength)],
                i + nextLength
            );
        }
    }

    generateResults([], 0);

    return results;
}
