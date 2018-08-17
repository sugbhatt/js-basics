/* Write a Program to Flatten a given n-dimensional array */

const flatten = (arr) => {
	// Write your code here
	if (typeof arr === 'object') {
		return arr.reduce((flat, next) => flat.concat(Array.isArray(next) ? flatten(next) : next), []);
	}
	return null;
};
// const output = flatten([1, [2, 3], [[4], [5]]]);
// console.log(output);

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
