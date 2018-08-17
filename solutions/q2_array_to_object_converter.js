/* Write a Program to convert an array of objects to an object
	based on a given key */

const convert = (arr, key) => {
	// Write your code here
	if (typeof arr === 'object' && typeof key === 'string') {
		let res = {};
		arr.forEach(obj => {
			let elem = obj[key];
			res[elem] = obj;
		});
		return res;
	}
	return null;
};
// const output = convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id');
// console.log(output);

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
