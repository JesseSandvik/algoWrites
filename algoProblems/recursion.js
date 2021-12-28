const data = require("./data");

/**
 * Implement a recursive factorial function.
 * 
 * 
 * 
 * **Solve the problem before writing the code. Write your pseudocode here.**
 * 
 *  This problem is solved as an example of a recursive function.
 *  Recursion is a problem-solving method that involves a function calling itself.
 * 
 *  Think of recursion as a way to solve a smaller version
 *  of a potentially much larger problem that you're really trying to solve.
 * 
 *  Recursive functions have two parts:
 * 
 *  1) The base case,
 *  which is the smaller(simplest) version of the problem you're trying to solve.
 * 
 *  2) The recursive case,
 *  which is where the function calls itself,
 *  solving increasingly simpler versions of that same problem.
 * 
 *  Recursive algorithms can have more than one base or recursive case,
 *  depending on inputs, outputs, conditions, etc
 *  
 * *Note of caution when using recursion*
 * 
 *  Because recursion is a problem-solving method that repeatedly calls itself,
 *  it can be very easy to write a function incorrectly that results in an infinite loop.
 *  Remember to establish a base case(s) early.
 *
 *  Factorial:
 *  the product of all positive integers less than or equal to a given positive integer(n),
 *  and denoted by that integer(n) and an exclamation point(n!).
 * 
 *  Therefore, 5 factorial, or 5!, would be:
 *      - 5! = 5(4)(3)(2)(1)
 *      - 5 x 4 = 20, 20 x 3 = 60, 60 x 2 = 120, 120 x 1 = 120.
 *      - 5! = 120
 * 
 *  So let's build out our solution.
 * 
 *  1) If the input is less than or equal to 1, return 1.
 *      - this is a our base case. The function will terminate here.
 *      - we know that only positive integers are inputs,
 *      and that 1 factorial is 1. So we end here.
 * 
 *  2) Multiply the input by the result of the recursed function,
 *  while decrementing the input of the recursed function by 1 each time it is executed.
 * 
 *  3) Return the result.
 * 
 */

// Time: O(n) | Space: O(n)
function factorial(integer) {
    if (integer <= 1) {
        return 1;
    }
    let numberMinusFactorial = factorial(integer - 1);
    return integer * numberMinusFactorial;
}

/**
 * Recursion is in essence a brute-force method,
 * and recursive problems are known to soak up a lot of space.
 * 
 * "Loops may achieve a performance gain for your program,
 *  recursion may achieve a performance gain for your programmer."
 * 
 * Memoization is a trick to help with the inherent space inefficiency of recursion.
 * This topic is covered more in dynamic programming.
 */

function sumOfAllElements(array) {
    if (array.length === 0) return 0;

    return array[0] + sumOfAllElements(array.slice(1));
}

const sum = (array) => {
    return array.length === 0 ? 0 : array[0] + sum(array.slice(1));
}

const recursionSum = {
    arrayOfInt: data.sequenceOne,
    sum() {
        const array = this.arrayOfInt;
        if (array.length === 0) {
            return 0;
        }
        return array[0] + sum(array.slice(1));
    }
}

function count(list) {
    if (list.length === 0) {
        return 0;
    }
    return 1 + count(list.slice(1));
}

function findLargest(array) {
    if (array.length === 1) {
        return array[0];
    } else if (array[0] >= array[array.length - 1]) {
        array.pop();
        return findLargest(array);
    } else {
        return findLargest(array.slice(1));
    }
}

console.log(sumOfAllElements(data.sequenceOne));
console.log(sum(data.sequenceOne));
console.log(recursionSum.sum());
console.log(count(data.sequenceOne));
console.log(findLargest(data.sequenceOne));
console.log(findLargest(data.sequenceTwo));