/*
1. Write a function which takes an array of numbers and returns the mode of that array.
[2, 4, 4, 4, 6, 6, 1] - > 4
[0, 0, 0, 10] -> 0
[1] -> 1
*/

function mode(arr) {
	"use strict"; //restricts to local variables
	var counts = []; // empty array
	var i, j; // declare variables
	var maxcount = 1; // set counter
	var maxnum = arr[0]; // empty array

	//put the numbers in arr, into counts
	for (i = 0; i < arr.length; i++) {
		if (counts[arr[i]] === undefined) { // if counts array starts off as undefined..
			counts[arr[i]] = 0; // move 0 into the array to begin the number for the array.
		}
		counts[arr[i]] = counts[arr[i]] + 1; // increment to get the next number
	}

	//find the max number in the counts array
	for (j = 0; j < counts.length; j++) { // while j is less than the length of the counts array..
		if (counts[j] > maxcount) { // if the element in j is greater than the var maxcount..
			maxcount = counts[j]; // move the element in the counts array to the var maxcount..
			maxnum = j; // move j into the array
		}
	}
	return maxnum; // return the whole array
}

console.log(mode([2, 4, 4, 4, 6, 6, 1]) === 4);
console.log(mode([0, 0, 0, 10]) === 0);
console.log(mode([1]) === 1);
