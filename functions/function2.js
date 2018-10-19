// Write a function to check whether the `input` is a string or not.


function checkInput(input){

if(typeof input === 'string'){
    return true
}else{
    return false
}
}
console.log(checkInput('kris'))



// Write a function to check whether a string is blank or not.


function blank(string){

    if(typeof string === 'string' && string.length === 0){
        return true;

    }else{
        return false;
    }
}

console.log(blank(''))



// Write a function that concatenates a given string n times (default is 1).


function concatenates(string,n){
    
    if( typeof n === 'undefined'){
        n = 1;
    }
    if( n < 1){
        return '';
    }
var result = '';
    for ( var i = 0; i < n; i++) {
        
        result += string;
        
    }
    return result
}

console.log(concatenates('ha',3));



// Write a function to count the number of letter occurrences in a string.


function count(string,letter){
var br = 0;

    for (var i = 0; i < string.length; i++) {
        if ( letter === string[i]){
            br++;
        }   
    }
return br
}

console.log(count('My random string',' '))




// Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.


function firstOccurrence(string,character){
var br = 0;

    for(var i = 0; i < string.length; i++){

        if(string[i] === character){
            return i + 1;
            break;
        }else{
            br++
            if(br === string.length){
                return -1;
            }
        }
    }

}

console.log(firstOccurrence('My random string','M'));



// Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.


function lastOccurrence(string,character){
    var br = 0;
    
        for(var i = 0; i < string.length; i++){
        
            if(string[i] === character){
                result = i+1;
            
            }else{
                br++
                if(br === string.length){
                    return -1;
                }
            } 
        }return result;
    
    }
    
    console.log(lastOccurrence('My random string','n'));



// Write a function to convert string into an array. Space in a string should be represented as “null” in new array.


function stringToArray(string){
var array = [];

    for (var i = 0; i < string.length; i++){
        if(string[i] === ' '){
            array[i] = null;
        }else{
            array[i] = string[i];
        }
    }
    return array;

}

console.log(stringToArray('My random stri'));



//  Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

//     "My random string", "_" -> "My_random_string"
//     "My random string", "+" -> "My+random+string"
//     "My random string" -> "My-random-string"


function replaceBlank(string){
    var newString = '';

    for (var i = 0; i < string.length; i++){
        if(string[i] === ' '){
            newString += '_';
        }else{
            newString += string[i];
        }
    }
    return newString;
}

console.log(replaceBlank('My random'));


 
//  Write a function to get the first n characters and add “...” at the end of newly created string.


function newString(string,n){
var newString = '';
    for(var i = 0; i < n; i++){
    newString += string[i];
    }
    return newString += '...'; 
    
}

console.log(newString('My string','5'));



// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]


function numberArray(array){
var newArray = []; 
var numberArray = []; 
var j = 0;
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        newArray[i] = parseFloat(element);

        if (!!newArray[i] && isFinite(newArray[i])) {
            numberArray[j]=newArray[i];
            j++
        }
    }

    return numberArray;
}

console.log(numberArray(['1','string',Infinity,undefined,'9',null,'1e+3']));



//  Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.


function yearToRetirement(yearOfBirthday,sex){
age = 2018 - yearOfBirthday
    if( sex === 'men'){
        if(age < 65){
        var yearToRetirement = 65 - age;
        return yearToRetirement;
        }else{ 
        return 'Already retired'
        }
        
    }
    if( sex === 'woman'){
        if(age < 60){
        var yearToRetirement = 60 - age;
        return yearToRetirement;
        }else{ 
        return 'Already retired'
        }
    }
}

console.log(yearToRetirement(1964,'men'))



// Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th

// Hint: num % 100 >= 11 && num % 100 <= 13


function numberSuffix(number){ 


    if(typeof parseFloat(number) !== 'number' || isNaN(number) || !isFinite(number)){
        return 'write number'

    }if(number % 100 >= 11 && number % 100 <= 13){
        number += '' + 'th'
        return number;
    }
        if(number % 10 === 1){
        number += '' + 'st';
        return number
        }
        if(number % 10 === 2){
        number += '' + 'nd';
        return number
        }
        if(number % 10 === 3){
        number += '' + 'rd';
        return number
        }
    return number+'th' 
    }

console.log(numberSuffix(Infinity))
// Write a function that accepts a number as a parameter and checks if the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.


