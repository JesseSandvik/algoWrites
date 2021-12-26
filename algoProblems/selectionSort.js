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
 *  2) If I want to sort the array/list in ascending order,
 *  I will iterate through the input list/array to find the index of the smallest element and assign it to a variable.
 * 
 *  If I want to sort the array/list in descending order,
 *  I will iterate through the input list/array to find the index of the largest element and assign it to a variable.
 * 
 *  1) Initialize a variable and assign it to the first index of the unsorted sublist.
 */