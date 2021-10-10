export function plusOne(digits: number[]): number[] {
    const length = digits.length;

    digits[length - 1] += 1;

    for (let i = length - 1; i > 0; i--) {
        if (digits[i] === 10) {
            digits[i - 1] += 1;
            digits[i] = 0;
        } else {
            return digits;
        }
    }

    if (digits[0] === 10) {
        digits.unshift(1);
        digits[1] = 0;
    }

    return digits;
}
