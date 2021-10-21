export function removeExtraSpaces(s: string): string {
    let index = 0;
    let result = "";
    let previousChar = null;

    while (index < s.length) {
        if (s[index] !== " ") {
            if (previousChar === " " && result !== "") {
                result += " ";
            }

            result += s[index];
        }
        previousChar = s[index];
        index++;
    }

    return result;
}

export function reverseWords(s: string): string {
    const trimmedSentence = removeExtraSpaces(s);

    let index = 0;

    let result = "";
    let tmpWord = "";
    while (index < trimmedSentence.length) {
        if (trimmedSentence[index] !== " ") {
            tmpWord += trimmedSentence[index];
        } else {
            result = " " + tmpWord + result;
            tmpWord = "";
        }

        index++;
    }

    result = tmpWord + result;

    return result;
}
