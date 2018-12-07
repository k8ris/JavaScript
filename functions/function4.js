// Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]


function switchElement(array){
var min = array[0];
var max = array[0];

var indexMax = 0;
var indexMin = 0;

    for (var i = 0; i < array.length; i++) {
        if(min > array[i]){
        min = array[i];
        indexMin = i;
        }
        if(max < array[i]){
        max = array[i];
        indexMax = i;
        }
        // prvi nacin (kraci):

        if(i === array.length-1){
            temp = array[indexMax]
            array[indexMax] = array[indexMin];
            array[indexMin] = temp;
        }   
    }
    // drugi nacin:

    // newArray = []; definisati.

    // for (var i = 0; i < array.length; i++) {
    //     if(indexMin === i){
    //         newArray[i] = array[indexMax];
    //     }
    //     else if(indexMax === i){
    //         newArray[i] = array[indexMin]
    //     }else{
    //         newArray[i] = array[i];
    //     }    
    // }
    return array;
}

console.log(switchElement([ 3, 500, 12, 149, 53, 414, 1, 19 ]))




// Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]



var array1 =   [ 3, 500, -10, 149, 53, 414, 1, 19 ];
console.log(computeArray(array1))

function computeArray(array1){
newArray = [];

    for (var i = 0; i < array1.length; i++) {

        newArray[i] = (array1[i]/2)+5;

        if(newArray[i] === 0){
            newArray[i] = 20;
        }    
    }
    return newArray;
}



// Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input : [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output: Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.



var students = [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ];
var grades = [ 50, 39, 63, 72, 99, 51, 83, 59 ];
console.log(studentsGrade(students,grades));


function studentsGrade(students,grades){
var outputMessage = '';
var score = 0

    for (var i = 0; i < students.length; i++) {
    
        if(grades[i] <= 50){
            outputMessage += students[i] + ' acquired ' + grades[i] + 'points  and failed to complete the exam' + '\n';
        }
        else{
            if(grades[i] % 10 !== 0){
                score = parseInt(grades[i]/10) + 1;
            }else{
                score = grades[i] % 10;
            }
            outputMessage += students[i] + ' acquired ' + grades[i] + 'points and earned ' + score + '\n';
        }
        
    }
    return outputMessage;
    
}



// Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]


var array2 = [ 13, 11, 15, 5, 6, 1, 8, 12 ];
console.log(sort(array2));


function sort(array2){
    newArray = [];
    for (var i = 0; i < array2.length - 1; i++) {
        min = array2[i]
        for (var j = 1 + i; j < array2.length; j++) {
            if(min > array2[j]){
                min = array2[j];
                index = j    
            }    
        } 
        array2[index] = array2[i];
        array2[i] = min;

    }
    for (var k = 0; k < array2.length; k++) {
        newArray [k] = array2[k] * 2;
    }
return newArray;
}



// Sort a previously defined array in a descending order and display it in the console.
// Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]



var array2 = [ 13, 11, 15, 5, 6, 1, 8, 12 ];
console.log(sort(array2));


function sort(array2){
    newArray = [];
    for (var i = 0; i < array2.length - 1; i++) {
       var max = array2[i]
        for (var j = 1 + i; j < array2.length; j++) {
            if(max < array2[j]){
                max = array2[j];
                index = j    
            }    
        } 
        array2[index] = array2[i];
        array2[i] = max;

    }
    for (var k = 0; k < array2.length; k++) {
        newArray [k] = array2[k] * 2;
    }
return newArray;
}




// Write a program that uses a loop to add all the even numbers from 1 to 1000 and 
// subtracts all the odd numbers 1 to 500 from the calculated sum. The result should 
// then be multiplied by 12.5 and displayed in console.
// Output: 2350000
console.log(addEvenSubtractOdd())

function addEvenSubtractOdd(){
    var sumEven = 0;
    var sumOdd = 0;

    for (var i = 0; i <= 1000; i++) {

        if(i % 2 === 0){
            sumEven += i;
        }else if(i % 2 !== 0 && i <= 500){
            sumOdd -= i;
        
        }   
    }
    result = (sumEven + sumOdd)*12.5
    return result
}



// Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

// Output: AnStJoJoDaMa
console.log(fromArrayToString( [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]))

function fromArrayToString(array){
var string = '';

    for (var i = 0; i < array.length; i++) {

        if (typeof array[i] === 'string' && array[i].length > 2) {
            for (var j = 0; j < 2; j++) {
                string += array[i][j]
            }    
        }   
    }
    return string
}


	
// Write a program that takes a string and prints its characters out in reversed order in the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB


string = 'Belgrade Institute of Technology'
console.log(reversed(string))

function reversed(string){
var newString = '';

    for (var i = string.length-1; i >= 0; i--) {
    newString += string[i];
        
    }
    return newString;
}



// Write a program that displays all the combinations of two numbers 
//ween 1 and 7. Don't display two of the same numbers at the same time.
// Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

console.log(combinationsOf2Numbers(7))

function combinationsOf2Numbers(n){
var result = '';
var br = 0
    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= 7; j++) {

            if (i !== j){
                result += i + ',' + j + '\n';
                br++
                
            }   
        }   
    }
    result ='number of possible combinations is: ' + br + result;
    return result;
}






// Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false


console.log(isNumberPrime(15));

function isNumberPrime(number){

    for (var i = 2; i < number/2 ; i++){
        
        if (number % i === 0 && number > 1){
        return false
        }
        
    }
    return true
}
	
// Check if a given string is a palindrome (spaces are ignored).
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true


var string = 'amrt'
console.log(ifStringIsPalindrome(string))

function ifStringIsPalindrome(string){
var stringWithoutBlank = removeBlank(string)
var reverseString = '';

    for(var i = stringWithoutBlank.length-1; i >= 0; i--){
            reverseString += stringWithoutBlank[i];
    }
    if(reverseString === stringWithoutBlank){
        return true;
    }else{
        return false;
    }
function removeBlank(string) {
var newString = '';

    for(var i = 0; i < string.length; i++){
        if(newString[i] !== ' '){
        newString += string[i]
        }  
    }return newString;
}    

}



// Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
// Input:  192 42 | 81 9
// Output: 6      | 9


console.log(greatestDivisor(81,9));

function greatestDivisor(a,b){
var result = 0;

    for (var i = 0; i <= a && i <= b; i++) {
    
         if(a % i === 0 && b % i === 0){
         result = i;
         }
    }
    return result;
}

