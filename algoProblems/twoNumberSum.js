const data = require("./data");

/**
 * I want the sum of two numbers in a sequence to equal a target number.
 * The two numbers cannot be the same number.
 * I want the two numbers to be printed to the console in an array.
 * If no two numbers sum up to the target, print an empty array to the console.
 * 
 * 
 * 
 * **Solve the problem before writing the code. Write your pseudocode here.**
 * 
 *  I have decided to solve this problem using the binary search algorithm.
 * 
 *  1) Since it was not made apparent whether the sequence is sorted,
 *  I will assume it to be unsorted, and I will have to sort the sequence first.
 * 
 *  Sorting will impact the time complexity.
 * 
 *  2) I will initialize a variable and assign it to the first index of the sorted sequence.
 * 
 *  3) I will initialize a variable and assign it to the last index of the sorted sequence.
 * 
 *  4) I will iterate through the sorted sequence,
 *  as long as the first index is less than or equal to the last index.
 *  For this to be truthy, all elements in the sequence will have been analyzed in the conditional statements.
 * 
 *  5) If the sum of the element at the first index and the element at the last index is equal to the target,
 *  and the element at the first index is not equal to the element at the last index,
 *  I will return the element at the first index and the element at the last index in an array.
 *  This will end the iteration and terminate the function.
 * 
 *  6) If the sum of the element at the first index and the element at the last index is less than the target,
 *  I will increment the first index by 1.
 *  This will provide a new element at the first index.
 *  The next iteration will add this new element to the last index, and a new sum to compare to the target.
 * 
 *  7) If the sum of the element at the first index and the element at the last index is greater than the target,
 *  I will decrement the last index by 1.
 *  This will provide a new element at the last index.
 *  The next iteration will add this new element to the first index, and a new sum to compare to the target.
 * 
 *  8) if no two elements in the sorted sequence sum to equal the target,
 *  I will return an empty array.
 * 
 * function twoNumberSumBinary
 *  input: sequence - an unsorted array of numbers
 *  input: target - a number
 * 
 *  output: if (sum = target), [sequence[first], sequence[last]]
 *  output: else []
 * 
 * 
 *  1) Sort the sequence
 *  2) Initialize a variable and assign it to the first index of the sorted sequence.
 *  3) Initialize a variable and assign it to the last index.
 *  4) Iterate through the sorted sequence until the first index is no longer less than the last index, and the condition is now falsy.
 *  5) If the sum of element at first and the element at last equal target,
 *  and element at first is not equal to element at last,
 *  return element at first and element at last in an array.
 *  6) If the sum of element at first and the element at last are less than the target, increment the first index by 1.
 *  7) If the sum of element at first and the element at last are greater than the target, decrement the last index by 1.
 *  8) If no two elements equal the target, return an empty array.
 */

//  Time: O(nlog(n)) | Space: O(1)
function twoNumberSumBinary(sequence, target) {
    sequence.sort((a, b) => a - b);
    let firstIndex = 0;
    let lastIndex = sequence.length - 1;

    while (firstIndex < lastIndex) {
        const potentialSolution = sequence[firstIndex] + sequence[lastIndex];

        if (potentialSolution === target && sequence[firstIndex] !== sequence[lastIndex]) {
            return [sequence[firstIndex], sequence[lastIndex]]
        } else if (potentialSolution < target) {
            firstIndex++;
        } else if (potentialSolution > target) {
            lastIndex--;
        }
    }
    return [];
}

/**
 * The binary search solution works, and would be ideal if space is a concern.
 * However, a hash table approach would be more efficient in terms of time complexity,
 * the trade off being that a hash table will take up O(n) space.
 */

 function stringSize(str) {
    return str.length * 2;
}

function objectSize(obj) {
    return stringSize(JSON.stringify(obj));
}

function twoNumberSumHash(array, target) {
    const nums = new Map();

    array.forEach((item) => {
        const potentialMatch = target - item;

        if (nums.has(potentialMatch)) {
            console.log(objectSize(nums));
            return [potentialMatch, item];
        } else {
            nums.set(item);      
        }
    })
    return [];
}

function twoNumberSumHashLoop(array, target) {
    const nums = new Map();

    for (let i = 0; i < array.length; i++) {
        const potentialMatch = target - array[i];
        
        if (nums.has(potentialMatch)) {
            console.log(objectSize(nums));
            return [potentialMatch, array[i]];
        } else {
            nums.set(array[i]);
        }
    }
    return [];
}

function twoNumberSumHashObj(array, target) {
    const nums = {};

    for (const num of array) {
        const potentialMatch = target - num;
        if (potentialMatch in nums) {
            console.log(objectSize(nums));
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
}

function twoNumberSumHashObjLoop(array, target) {
    const nums = {};

    for (let i = 0; i < array.length; i++) {
        const potentialMatch = target - array[i];
        if (potentialMatch in nums) {
            console.log(objectSize(nums));
            return [potentialMatch, array[i]];
        } else {
            nums[array[i]] = true;
        }
    }
    return [];
}

/*console.time("Map Loop");
twoNumberSumHashLoop(data.sequenceOne, 12);
console.timeEnd("Map Loop");
console.time("Map");
twoNumberSumHash(data.sequenceOne, 12);
console.timeEnd("Map");
console.time("Object");
twoNumberSumHashObj(data.sequenceOne, 12);
console.timeEnd("Object");*/
console.time("Object Loop");
twoNumberSumHashObjLoop(data.sequenceOne, 12);
console.timeEnd("Object Loop");