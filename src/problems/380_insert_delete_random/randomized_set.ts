class RandomizedSet {
    s = new Set();

    constructor() {}

    insert(val: number): boolean {
        if (this.s.has(val)) {
            return false;
        }

        this.s.add(val);

        return true;
    }

    remove(val: number): boolean {
        if (this.s.has(val)) {
            this.s.delete(val);

            return true;
        }
        return false;
    }

    getRandom(): number {}
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
