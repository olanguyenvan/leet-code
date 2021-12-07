export function longestPalindrome(s: string): string {
    const wordLength = s.length;
    if (wordLength < 1) {
        return "";
    }

    let maxStart = 0;
    let maxEnd = 0;

    for (let i = 0; i < s.length; i++) {
        const [leftPalindromCenter, rightPalindromCenter] =
            getMaxPalindromAroundCenter(s, i, i);
        const [leftPalindromDivision, rightPalindromDivision] =
            getMaxPalindromAroundCenter(s, i, i + 1);

        if (rightPalindromCenter - leftPalindromCenter > maxEnd - maxStart) {
            maxStart = leftPalindromCenter;
            maxEnd = rightPalindromCenter;
        }

        if (
            rightPalindromDivision - leftPalindromDivision >
            maxEnd - maxStart
        ) {
            maxStart = leftPalindromDivision;
            maxEnd = rightPalindromDivision;
        }
    }

    return s.substring(maxStart, maxEnd + 1);
}

function getMaxPalindromAroundCenter(
    s: string,
    left: number,
    right: number
): [number, number] {
    let l = left;
    let r = right;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
    }

    return [l + 1, r - 1];
}
