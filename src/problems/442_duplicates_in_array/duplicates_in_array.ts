export function findDuplicates(nums: number[]): number[] {
    function swap(indexA: number, indexB: number): void {
        const tmp = nums[indexA];

        nums[indexA] = nums[indexB];
        nums[indexB] = tmp;
    }

    let i = 0;

    while (i < nums.length) {
        const currentValue = nums[i];

        if (nums[currentValue - 1] !== currentValue) {
            swap(i, currentValue - 1);
        } else {
            i++;
        }
    }

    const duplicates: Set<number> = new Set();

    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] !== i) {
            duplicates.add(nums[i - 1]);
        }
    }

    return Array.from(duplicates);
}
