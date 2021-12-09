export function lengthOfLongestSubstring(s: string): number {
    const queue: string[] = [];
    let max = 0;

    const usedChars: { [k: string]: boolean } = {};

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        queue.push(currentChar);

        if (usedChars[currentChar]) {
            // get from queue until you find the same character
            let poppedChar: string;
            do {
                poppedChar = queue.shift()!;
                usedChars[poppedChar] = false;
            } while (poppedChar !== currentChar);
        } else {
            max = Math.max(max, queue.length);
        }

        usedChars[currentChar] = true;
    }

    return max;
}
