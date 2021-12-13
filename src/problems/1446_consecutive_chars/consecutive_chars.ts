export function maxPower(s: string): number {
    let max = 1;
    let startIndex = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[startIndex]) {
            max = Math.max(max, i - startIndex + 1);
        } else {
            startIndex = i;
        }
    }

    return max;
}
