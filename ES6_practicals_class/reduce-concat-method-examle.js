// 1. Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

// let arrays = [[1, 2, 3], [4, 5], [6]];
// // Your code here.
// // → [1, 2, 3, 4, 5, 6]

let arrays = [[1, 2, 3], [4, 5], [6]];

let result = arrays.reduce((total,el) => total.concat(el));
console.log(result);

//2. Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

// function every(array, test) {
//   // Your code here.
// }

function every(array, f) {
    for(var i = 0; i < array.length; i++){
        if (f(array[i]) === false){
            return false;
        }
    }
    return true;
}
function every2(array, f) {
    if(array.some(el => !f(el))){
        return false;
    }
    return true;
}

var f = el => el > 5 ? true:false;

console.log(every([6,7,8,9,1],f));
console.log(every2([6,7,8,9,1],f));




