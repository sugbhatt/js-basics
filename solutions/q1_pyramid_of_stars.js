/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (height) => {
    // Write your code here
    let index = height;
    let output = '';
    for (let i = 0; i < height; i = i + 1) {
        for (let j = 0; j < index; j = j + 1) {
            output = output + ' ';
        }
        for (let k = 0; k <= i; k = k + 1) {
            output = output + '* ';
        }
        output = output + ' \n';
        index = index - 1;
    }
    return output;
};
// const pyramid = buildPyramid(5);
// console.log(pyramid);

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
