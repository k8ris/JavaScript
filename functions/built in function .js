


// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]


function convert(array){
var arrayNumber = [];

    for(var i = 0, j = 0; i < array.length; i++){
        if(isFinite(parseFloat(array[i]))){
            arrayNumber[j] =parseFloat(array[i]);
            j++
        }
    }
    return arrayNumber;
} 

console.log(convert(["1", "21", undefined, "42", "1e+3", Infinity]));




// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// 	Output: “015-2247”



function convertToString(array){
    var string = '';
    
        for(var i = 0; i < array.length; i++){

            if(isFinite(parseFloat(array[i]))){
                string += parseFloat(array[i]);
            }
        }
        return string;
    } 

console.log(convertToString([NaN, 0, 15, false, -22, '', undefined, 47, null]));



// Write a program to filter out falsy values from the array.

// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]


function filterFalsy(array){
var newArray = [];
var j = 0;

    for(var i = 0; i < array.length; i++){
        if(array[i]){
            newArray[j] = array[i];
            j++;
        }
    }
    return newArray;   
}

console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]))



// Write a program that calculates a number of integer values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3


function integer(array){
var newArray = [];
var j = 0;
for(var i = 0; i < array.length; i++) {
    
    if(isFinite(parseFloat(array[i]))){
        newArray[j] = '' + array[i];
        j++
    }
}
var numberOfInteger = newArray.length
    for(var i = 0; i < newArray.length; i++) {
        for ( j = 0; j < newArray[i].length; j++) {
            if(newArray[i][j] === '.'){
                numberOfInteger --;
            }   
        }    
    }
    return numberOfInteger;
}

integer( [NaN, 23.1, 15, false, -22.5, '', 4, 7, null])
console.log(integer( [NaN, 23.1, 15, false, -22.5, '', 4, null]))



// Write a program that calculates a number of float values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2



function integer(array){
    var newArray = [];
    var j = 0;
    var numberOfFloat = 0;

    for(var i = 0; i < array.length; i++) {
        
        if(isFinite(parseFloat(array[i]))){
            newArray[j] = '' + array[i];
            j++
        }
    }
        for(var i = 0; i < newArray.length; i++) {
            for ( j = 0; j < newArray[i].length; j++) {
                if(newArray[i][j] === '.'){
                    numberOfFloat ++;
                }   
            }    
        }
        return numberOfFloat;
    }
    
    integer( [NaN, 23.1, 15, false, -22.5, '', 4, 7, null])
    console.log(integer( [NaN, 23.1, 15, false, -22.5, '', 4, null,2.9]))



