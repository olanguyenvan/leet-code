export function canPartition(nums: number[]): boolean {
    const sum = nums.reduce((acc, n) => acc + n, 0);

    if (sum % 2 === 1) {
        return false;
    }

    return canFindSubset(nums, sum / 2);
}

function canFindSubset(nums: number[], sum: number): boolean {
    const accessibility: boolean[] = new Array(sum + 1).fill(false);

    accessibility[0] = true; // you can always have a sum of 0

    for (const num of nums) {
        for (let i = sum; i >= num; i--) {
            if (accessibility[i - num] === true) {
                accessibility[i] = true;
            }
        }
    }

    return accessibility[sum];
}
