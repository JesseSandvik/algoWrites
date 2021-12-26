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
 *  If I'm sorting the list list in ascending order,
 *  one interation will be to find the index of the smallest element.
 * 
 *  If I'm sorting the list in descending order,
 *  one iteration will be to find the index of the largest element.
 * 
 *  Regardless, the second iteration will be used to swap the smallest/largest element,
 *  with the first index of the unsorted sublist.
 * 
 *  The second iteration will end when the first index of the unsorted sublist,
 *  is no longer less than the last index of the unsorted sublist.
 *  This conclusion will mean that all elements are now in the sorted sublist.
 * 
 *  3) Return the sorted list/array.
 */