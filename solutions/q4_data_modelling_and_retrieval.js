// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here
let fruits = [1000000];
for (let index = 1; index <= 1000000; index = index + 1) {
    let nameVal = 'name' + index;
    let colorVal = 'color' + index;
    let pricePerKgVal = 'pricePerKg' + index;
    let fruit = {
        name: nameVal,
        color: colorVal,
        pricePerKg: pricePerKgVal
    };
    fruits.push(fruit);
}
const getColorAndPrice = (name) => {
    let result = fruits.find(fruit => {
        return fruit.name === name;
    });
    return result;
};
// let startTime = Date.now();
// const output = getColorAndPrice('name99999');

// console.log('color:' + output.color + ', pricePerKg:'+ '\n' +
// output.pricePerKg + ', duration:'+ (Date.now() - startTime));
module.exports = getColorAndPrice;
