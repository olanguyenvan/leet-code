export function longestCommonSubsequence(text1: string, text2: string): number {
    const text1Length = text1.length;
    const text2Length = text2.length;

    const initialMatrixValue = 0;

    const m = Array.from(Array(text1Length + 1), () =>
        new Array(text2Length + 1).fill(initialMatrixValue)
    );

    for (let x = 1; x <= text1Length; x++) {
        for (let y = 1; y <= text2Length; y++) {
            const charX = text1[x - 1];
            const charY = text2[y - 1];

            if (charX === charY) {
                const valueUpAndLeft = m[x - 1][y - 1];
                m[x][y] = valueUpAndLeft + 1;
            } else {
                m[x][y] = Math.max(m[x - 1][y], m[x][y - 1]);
            }
        }
    }

    return m[text1Length][text2Length];
}
