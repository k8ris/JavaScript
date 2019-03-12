//1. Write a function that capitalizes the first letter of each string argument it receives.  
// 	Function arguments: 'hello', 'there', 'ES', 6
// 	Output: 'Hello', 'There', 'ES'

let capitalize = (...arg) => arg.map ( string => string.charAt(0).toUpperCase() + string.slice(1));

console.log(capitalize('hello','there','ES'));

//2. Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// 	Input: 120
// 	Output: 24

let calculateTaxRate = (priceProduct) => {
    let taxRateSerbia = 0.2;
    return priceProduct * taxRateSerbia;
}

console.log(calculateTaxRate(120));

//3. Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of the array by 1.  
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]

let increase = (arr,value = 1) => arr.map((element) => element + value);

console.log(increase([4,6,11,-9,2.1],2))

//4. Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]

let filtersEven = (array) => array.filter((element) => element%2 === 0);

console.log(filtersEven([6, 11, 9, 0, 3]));

//5. Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// 	Output: ['babel.js, 'JS standard']

let filtersString = (array) => array.filter((element) => element.includes('js') || element.includes('JS'));

console.log(filtersString(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']))

//6. Write a function that filters all integer numbers from the given array. 
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]
let filtersIntegerNumber = (array) => array.filter((el) => Number.isInteger(el));
console.log(filtersIntegerNumber([1.6, 11.34, 9.23, 7, 3.11, 8]));

//7. Write a function that filters all integer arguments that contain digit 5.
// 	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
// 	Output: [45, 553]

let filters = (...arg) => arg.filter((el) => Number.isInteger(el) && el.toString().includes(5));

console.log(filters(23, 11.5, 9, 'abc', 45, 28, 553));
	
//8. Write a function that returns indexes of the elements greater than 10. 
// 	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// 	Output: 1, 2, 5

let returnIndex = (array) => array.reduce((a,e,i) => {
    if(e > 10){
        a.push(i);
    }
    return a;
},[]);

console.log(returnIndex([1.6, 11.34, 29.23, 7, 3.11, 18]));


//9. Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
// Write a function that prints out the names of persons older than 25. 
// Write a function that check if there is a person older than 40.
// Write a function that checks if all persons are older than 20.  

let arrayPersons = [{name: 'kris', age: 34},{name: 'marija', age: 65},{name: 'dora',age: 6}];

let printName = (array) => array.filter((el) => el.age > 25).forEach(el => console.log(el.name));
let checkOlderThan40 = (array) => array.some((el) => el.age > 40);
let checkAllOlderThan20 = (array) => array.every((el) => el.age > 20);

printName(arrayPersons);
console.log(checkOlderThan40(arrayPersons));
console.log(checkAllOlderThan20(arrayPersons));

// Write a function that checks if the given array is an array of positive integer values. 
// 	Input: [3, 11, 9, 5, 6]
// 	Output: yes
// 	Input: [3, -12, 4, 11]
// 	Output: no

let checkPositiveIntegers = (array) => array.every((el) => Number.isInteger(el) && !el.toString().startsWith('-'));

console.log(checkPositiveIntegers([3, 11, 9, 5, 6]));
console.log(checkPositiveIntegers([3, -12, 4, 11]));

//10. Write a function that calculates the product of the elements of the array. 
// Input: [2, 8, 3]
// Output:  48

let calculates = (array) => array.reduce((total, el) => total * el);

console.log(calculates([2, 8, 3]));

//11. Write a function that calculates the maximum of the given array. 
// Input: [2, 7, 3, 8, 5.4] 
// 	Output: 8

let finedMax = (array) => array.reduce((prev,current) => prev > current ? prev : current);

console.log(finedMax([2, 7, 3, 8, 5.4]));

