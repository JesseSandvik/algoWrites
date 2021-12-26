const data = require("./data");

/**
 * I want to a sorted version of an array using selection sort.
 * The sorted array should have the lowest value first, and the highest value last.
 * 
 * 
 * 
 * **Solve the problem before writing the code. Write your pseudocode here.**
 * 
 *  This problem is solved using the selection sort algorithm.
 * 
 *  This problem can be solved by dividing the list into two sublists,
 *  one list will contain the unsorted elements, one list will contain the sorted elements.
 * 
 *  The sorted sublist will be empty to start, and will fill as the unsorted list shrinks,
 *  ultimately resulting in all elements being sorted in the sorted sublist, and the unsorted sublist being empty.
 * 
 *  1) I will initialize a variable and assign it the first index of the unsorted sublist.
 *  Since the entire list begins unsorted, this will be the first index of the input array/list.
 * 
 *  2) I will have to iterate through the input list/array two times;
 * 
 *  If I'm sorting the list in ascending order,
 *  one interation will be to find the index of the smallest element.
 * 
 *  If I'm sorting the list in descending order,
 *  one iteration will be to find the index of the largest element.
 * 
 *  Regardless, the second iteration will be used to swap the smallest/largest element,
 *  with the first index of the unsorted sublist.
 * 
 *  After this swap, the unsorted first index will be incremented by one.
 * 
 *  The second iteration will end when the first index of the unsorted sublist,
 *  is no longer less than the last index of the unsorted sublist.
 *  This conclusion will mean that all elements are now in the sorted sublist.
 * 
 *  3) Return the sorted list/array.
 * 
 * function selectionSort
 *  input: array - an unsorted array/list
 * 
 *  output: a sorted array/list
 * 
 *  1) Initialize a variable and assign it to the first index of the unsorted sublist.
 *  2) Iterate through the array/list to find the index of the smallest/largest element in the unsorted sublist.
 *  3) Iterate through the array/list and swap the smallest/largest element fronm the previous iteration
 *     with the element at the current index of the unsorted sublist.
 *     Then increment the first index of the unsorted sublist by 1.
 *     End the iteration when:
 *     the first index of the unsorted sublist is no longer less than the last index of the input array/list.
 *  4) Return the sorted list/array.
 */

//  Time: O(n^2) | Space: O(1)
function selectionSort(array) {
    let unsortedFirstIndex = 0;

    while (unsortedFirstIndex < array.length) {
        let smallestElementIndex = unsortedFirstIndex;

        for (let i = unsortedFirstIndex + 1; i < array.length; i++) {
            if (array[i] < array[smallestElementIndex]) {
                smallestElementIndex = i;
            }
        }
            const temp = array[unsortedFirstIndex];
            array[unsortedFirstIndex] = array[smallestElementIndex];
            array[smallestElementIndex] = temp;
            unsortedFirstIndex++;
        }
    return array;
}

console.log(selectionSort(data.sequenceOne));
console.log(selectionSort(data.sequenceTwo));

/**
 * Selection sort works just fine, and isn't terrible in terms of efficency.
 * However, there are better options for sorting algorithms,
 * such as quicksort which has a time complexity of O(n log(n)).
 */