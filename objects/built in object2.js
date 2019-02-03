// Try to use built-in object methods to solve some of the problems here 
'use strict'

//TASK 1.
// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1];



var duplicateElement = function (array) {
    var newArray = [];
    array.forEach(function (elem) {
        newArray.push(elem,elem);
    })
    return newArray;
}


var array = [2, 4, 7, 11, -2, 1];
console.log(duplicateElement(array));



//TASK 2.
// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 



function removesDuplicate(array) {
    var newArray = [];
    array = array.sort( function (a,b) {
        return a - b ;
    }); 

    array.forEach(function removeElements(element, index, arr){
      if (element !== arr[index +1]) {
          console.log(arr[index+1])
          newArray.push(element);
      }
    })
    
    return newArray;

}

var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var result = removesDuplicate(array);
console.log(result);



//TASK 3. 
// A)
// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true;



function checksIsArrayOdd(array) {
  return (array.length % 2 !== 0);
}
 
var array =  [1, 2, 9, 2, 1];
var result = checksIsArrayOdd(array)
console.log(result);

// B)
// Write a function that counts the number of elements less than the middle element. 
//If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4;

function countNumberOfElements(array) {
  var middleElementIndex = array.length/2 ;
  var counter = 0;
    if (array.length % 2 === 0){
        return 'error array is not odd';
    }
    array.forEach(function (element,index) {
      if (index < middleElementIndex) {
        counter++;
      }
    })
    return counter;
}
var array = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
var result = countNumberOfElements(array);
console.log(result);



//TASK 4.
// Write a function that finds the smallest element of a given array. 
//The function should return an object that contains the smallest value and 
//its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }



function smallestValue(array) {
    var sortedArray = array.slice().sort(function (a,b) {
        return a - b;
    })
    var minElement = sortedArray[0];
    var lastPositionOfMinElement = sortedArray.lastIndexOf(minElement);
    return {minElement, lastPositionOfMinElement} ;
}

var array = [1, 4, -2, 11, 8, 1, -2, 3];
var result = smallestValue(array);
console.log(result);




// TASK 5.
// A)
// Write a function that finds all the elements in a given array 
//less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]



function elementsLessThan(array,element) {
    var newArray = [];
    array.forEach(function (elem){
       if (elem < element) {
           newArray.push(elem)
       }
    })

    return newArray;
}

var array = [2, 3, 8, -2, 11, 4];
var element = 6;

var result = elementsLessThan(array, element);
console.log(result);

// B
// Write a function that finds all the elements in a given array that start with the 
//“pro” substring. The function should be case insensitive. 
// 		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// 	Output: [’Programming’, ‘product’]

function filterArray(array,element) {
    element = element.toUpperCase();
    var indexForCut = element.length;
    var newArray = [];

    array.forEach(function (elem) {
    var cutWord = elem.slice(0,indexForCut).toUpperCase()

       if (cutWord === element){
           newArray.push(elem);
       }
    })

    return newArray;
}

var array = ['JavaScript', 'Programming', 'fun', 'product'];
var element = 'Pro';
var result = filterArray(array,element);
console.log(result);

//TASK C)
// Write a function that expects an array and a callback function that filters 
//out some of the elements. Use functions defined in a) or b) to test it.

function filterArray(array) {
    var newArray = [];

    array.forEach(function (elem) {
    var cutWord = elem.slice(0,3).toLowerCase();

       if (cutWord === 'pro'){
           newArray.push(elem);
       }
    })

    return newArray;
}

function filter(array, filterArray) {
return filterArray(array);
}

var array = ['JavaScript', 'Programming', 'fun', 'product'];
var result = filter(array, filterArray);
console.log(result);



//TASK 6.
// A)
// Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
// 	[
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]

var list = [
     {name: 'apples', price: 100}, 
     {name: 'milk', price: 80}, 
     {name: 'bananas', price: 150.567}
     ];

// B)
// Write a function that calculates the total price of your shopping list. 

function totalPrice(list) {
    var total = 0;
    list.forEach(function (elem) {
        total += elem.price;
    })

    return total;
}

var result = totalPrice(list);
console.log(result);

// C)
// Write a function that calculates the average product price of your shopping list. 
//Print this value with the precision of three decimals. 

function average(list,totalPrice) {
   return (totalPrice(list) / list.length).toFixed(3);
}


var result = average(list,totalPrice);
console.log(result);

// D)
// Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 

function mostExpensiveProduct(list) {
var mostExpensive = list[0].price;
   list.forEach(function(elem) {
        if(elem.price > mostExpensive) {
            mostExpensive = elem.price;
        }
   })
   return mostExpensive;
}

var result = mostExpensiveProduct(list);
console.log(result);



//TASK 7.
// A)
// Write a function that checks if a given string is written in all capitals.

function stringValidator(string) { 
    var result = true;

    string.split('').forEach(function (elem) {
        if (elem !== elem.toUpperCase()){
            result = false;
        }    
    })
   return result; 
}

var result = stringValidator('KRIs');
console.log(result);

// B)
// Write a function that checks if a given string contains any digits.

function passwordValidator(string) {
    var result = false;
    string.split('').forEach(function(elem) {
        if (!isNaN(parseFloat(elem))) {
            result = true;
        }
    })
    return result;
}

var result = passwordValidator('k8ris');
console.log(result);

// C)
// Write a function that checks if a given string is a valid hexadecimal color.

function colorValidator(string) {
    if (string.charAt(0) !== '#') {
        return false;
    }
    if (string.length !== 7) {
        return false;
    }
    for (var i = 1; i < 7; i++) {
        var hexadecimalNumber = parseInt(string[i],16);

        if (isNaN(hexadecimalNumber)) {
            return false;
        }
    }
    return true;
}

var stringColor = '#ff4589'
var result = colorValidator(stringColor);
console.log(result);

// D)
// Write a function that checks if a given number belongs to the interval from 1900 to 2018. 

function yearValidator(number) {
    if (number > 1900 && number < 2018) {
       return true;
    }
    return false;
}

var number = 2019;
var result = yearValidator(number);
console.log(result);

// E)
// Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

function validator() {
    return {
        stringValidator: stringValidator,
        passwordValidator: passwordValidator,
        colorValidator: colorValidator,
        yearValidator: yearValidator,
        
    }
}

var objValidator = validator();
console.log(objValidator);



// TASK 8.
// Write a function that calculates a number of days to your birthday.
// Input: 25 February 
// Output: 5 days



function daysToBirthday(birthdayData) {
    birthdayData = new Date(birthdayData)
    var today = new Date();
    birthdayData.setYear(today.getFullYear());
    
    if (birthdayData.getMonth() < today.getMonth()){
        birthdayData.setYear(today.getFullYear() + 1)

    }
    var daysToBirthday =parseInt((birthdayData.getTime() - today.getTime())/(1000 * 60 * 60 *24));
    return daysToBirthday;
}

var result = daysToBirthday('2 February');
console.log(result);



// Write a function that for a given departure and arrival time calculates the time 
//the trip takes.
// 	Input: 8:22:13 11:43:22
// 	Output: 3 hours 21 minutes 9 seconds 



// function TripTime(departureTime, arrivalTime) {


// }


//TASK 10.
// A)
// Writ a constructor function that creates points in space. 
//Each point in space has its own x, y, and z coordinate. 
//For example, (3, 5, 1) can be a point in space.



function PointInSpace(x,y,z) {

    this.x = x;
    this.y = y;
    this.z = z;

  
}

var pointFirst = new PointInSpace(4,4,9);
var pointSec = new PointInSpace(2,2,7)
console.log(pointFirst);

// B)
// Write a function that calculates the distance between two points in the space. 

function distanceBetweenPoints(pointFirst, pointSec) {
    var x =  Math.abs(pointFirst.x - pointSec.x);
    var y =  Math.abs(pointFirst.y - pointSec.y)
    var distance = Math.sqrt(x*x + y*y);

    return distance;
}

var result = distanceBetweenPoints(pointFirst, pointSec);
console.log(result);


//TASK 11.
//A) B)
// Write a function that generates a random integer value between 5 and 20.
// Write a function that generates a random integer value between 50 and 100. 

function RandomNumber(max,min) {
    return parseInt(Math.random() * (max -min) + min);                                               
}

var max = 50;
var min = 100;
var result = RandomNumber(max,min);
console.log(result);

// C)
// Write a function which expects a number and a callback generator function and 
//returns an array of numbers produced by the generator function.    

function makeArray(arrayLength,RandomNumber) {
    var array = [];
    for (var i = 0; i <= arrayLength; i++) {
        var element = RandomNumber(1,15);
        array.push(element);
    }
    return array;
}

var arrayLength = 5;
var result = makeArray(arrayLength,RandomNumber);
console.log(result);



//  Write a function that shuffles the elements of a given array. 
// 		Input: [3, 6, 11, 2, 9, 1]
// 		Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the given array)



function shufflesElement(array) {
    var newArray = [];
    var inputArrayLength = array.length;
    for (var i = 0; i < inputArrayLength; i++) {
        var random = parseInt(Math.random() * array.length);
        var element = array[random];
        array.splice(random,1);
        newArray.push(element)
    }
    return newArray;
}

var array = [3, 6, 11, 2, 9, 1];
var result = shufflesElement(array);
console.log(result);




