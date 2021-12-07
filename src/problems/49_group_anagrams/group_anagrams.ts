const ASCII_INDEX_OF_A = 97;

export function groupAnagrams(strs: string[]): string[][] {
    const groupsByCharCount: { [k: string]: string[] } = {};

    for (const s of strs) {
        const charOccurence: number[] = [];
        for (let i = 0; i < s.length; i++) {
            const charCode = s.charCodeAt(i) - ASCII_INDEX_OF_A;

            if (!charOccurence[charCode]) {
                charOccurence[charCode] = 0;
            }

            charOccurence[charCode] += 1;
        }

        const occurencesChainElements: string[] = [];

        for (const [charCode, occurences] of Object.entries(charOccurence)) {
            occurencesChainElements.push(
                `${String.fromCharCode(
                    parseInt(charCode) + ASCII_INDEX_OF_A
                )}${occurences}`
            );
        }

        const occurencesChain = occurencesChainElements.join("");

        if (!groupsByCharCount[occurencesChain]) {
            groupsByCharCount[occurencesChain] = [];
        }
        groupsByCharCount[occurencesChain].push(s);
    }

    return Object.values(groupsByCharCount);
}
