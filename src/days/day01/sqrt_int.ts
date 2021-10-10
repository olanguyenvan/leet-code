export function sqrt_int(x: number): number {
    return sqrt_int_rec(0, x);

    function sqrt_int_rec(a: number, b: number): number {
        const a_integer_part = Math.trunc(a);
        const b_integer_part = Math.trunc(b);

        if (a_integer_part === b_integer_part) {
            return b_integer_part;
        }

        const middle = (a + b) / 2;
        const res = middle * middle;

        if (res > x) {
            return sqrt_int_rec(a, middle);
        } else {
            return sqrt_int_rec(middle, b);
        }
    }
}
