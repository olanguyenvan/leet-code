export function sqrt_int_recursive(x: number): number {
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

export function sqrt_int_iteration(x: number): number {
    let a = 0;
    let b = x;
    let middle, res;
    let a_integer_part = Math.trunc(a);
    let b_integer_part = Math.trunc(b);

    while (a_integer_part !== b_integer_part) {
        a_integer_part = Math.trunc(a);
        b_integer_part = Math.trunc(b);

        if (a_integer_part === b_integer_part) {
            return b_integer_part;
        }

        middle = (a + b) / 2;
        res = middle * middle;

        if (res > x) {
            b = middle;
        } else {
            a = middle;
        }
    }

    return a_integer_part;
}
