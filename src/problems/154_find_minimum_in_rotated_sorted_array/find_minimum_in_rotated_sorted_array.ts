export function getArrayWithoutRepetitions(nums: number[]): number[] {
    const numsWithoutRepetitions: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        const currentvalue = nums[i];

        if (
            currentvalue !==
            numsWithoutRepetitions[numsWithoutRepetitions.length - 1]
        ) {
            numsWithoutRepetitions.push(currentvalue);
        }
    }

    if (
        numsWithoutRepetitions.length > 1 &&
        numsWithoutRepetitions[0] ===
            numsWithoutRepetitions[numsWithoutRepetitions.length - 1]
    ) {
        numsWithoutRepetitions.pop();
    }

    return numsWithoutRepetitions;
}

export function findMin(nums: number[]): number {
    const numsWithoutRepetitions = getArrayWithoutRepetitions(nums);

    return findMinRec(0, numsWithoutRepetitions.length - 1);

    function findMinRec(leftIndex: number, rightIndex: number): number {
        const leftValue = numsWithoutRepetitions[leftIndex];
        const rightValue = numsWithoutRepetitions[rightIndex];
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        const middleValue = numsWithoutRepetitions[middleIndex];

        if (rightIndex - leftIndex <= 1) {
            return Math.min(leftValue, rightValue);
        }

        if (leftValue < rightValue) {
            return findMinRec(leftIndex, middleIndex);
        }
        if (leftValue > rightValue && middleValue > leftValue) {
            return findMinRec(middleIndex, rightIndex);
        }

        return findMinRec(leftIndex, middleIndex);
    }
}
