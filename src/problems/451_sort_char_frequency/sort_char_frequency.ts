export function frequencySort(s: string): string {
    const frequency: { [k: string]: number } = {};

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        if (!frequency.hasOwnProperty(currentChar)) {
            frequency[s[i]] = 0;
        }
        frequency[currentChar] += 1;
        frequency[s[i]] === undefined ? 0 : frequency[s[i]] + 1;
    }

    const sortedByFrequency = Object.entries(frequency).sort(
        (a, b) => b[1] - a[1]
    );

    return sortedByFrequency
        .map(([char, amount]) => char.repeat(amount))
        .join("");
}
