
// Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.

var string = 'ihis is my home'
console.log( countVowels(string))

function countVowels(string) {
  var br = 0;  
  for (var i = 0; i < string.length; i++) {
    switch (string[i]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':

          br++;
          break;
        default:
          break;
        }           
    }

   return br;
}



// Write a function that combines two arrays by alternatingly taking elements.
// [‘a’,1,’b’,2,’c’,3]




var a = ['a','b','c'], b = [1,2,3]
console.log(alternatinglyTakingElements(a,b))


function alternatinglyTakingElements(a,b) {
  var newArray = [];
  var i = 0;
  var j = 0;

  for(var k = 0; k < a.length + b.length; k++) {
    if (a[i] !== undefined) {
    newArray[k] = a[i];
      i++;
    }
    if (b[i] !== undefined){
    newArray[++k] = b[j];
      j++
    }
  }
  return newArray;
}

 

// Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

var k = 2;
list = [1,2,3,4,5,6];
console.log(rotateList(list,k));

function  rotateList(list,k) {
  var newList = [];
  var j = 0;
  

  for (var i = 0; i < list.length; i++) {
    if (k === list.length) {
      newList[i] = list[j];
      j++;
    }else {
      newList[i] = list[k];
      k++;
    }    
  }
  
  return newList;
}



// Write a function that takes a number and returns array of its digits.

var number = 598;
console.log(fromNumberToArrayString(number));

function fromNumberToArrayString() {
  var array = [];
  var string = number + '';

  for (var i = 0; i < string.length; i++) {
      array[i] = string[i];
  }

  return array;
}

 

// Write a program that prints a multiplication table for numbers up to 12.

console.log(multiplicationTable());

function multiplicationTable() {
 var firstRow = '\t';
 var row = '';
 var sum = 0;
 var table = '';

    for (var i = 1; i <= 12; i++) {
      firstRow += i + '\t' ;
      sum = 0;
      row = '';
      
      for (var j = 1; j <= 12; j++) {
      sum += i;
      row += sum + '\t';

      }
      table += i + '\t' + row + '\n';
    }
    return firstRow + '\n' + table  
}

 
// Write a function to input temperature in Centigrade and convert to Fahrenheit.

var temperature = 45;
console.log(centigradeToFahrenheit(temperature))


function centigradeToFahrenheit(temperature) {
  var f;
  f = (9/5)*temperature + 32;
  return f;

}
 

// Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

a = [1, NaN, undefined, 2, 19, Infinity, 'kris']
console.log(maximumElement(a));

function maximumElement(a) {
  var j = 0;
  var numberArray = [];
  
  for (var i = 0; i < a.length; i++) {
    if ( typeof a[i] === 'number' && isFinite(a[i])) {
      numberArray[j] = a[i];
      j++
    }
  }

  var max = numberArray[0];
  for (let i = 1; i < numberArray.length; i++) {
    
      if (max < numberArray[i]) {
        max = numberArray[i];
      }
  } 
  
  return max;
    
}
 

// Write a function to find the maximum and minimum elements. Function returns an array.
 
  var array = [1, 7, 9, 11, 35, 12, 4];
  console.log(minMax(array));
  
  function minMax(array) {
    var min = array[0];
    var max = array[0];

    for (var i = 0; i < array.length; i++) {
      if (min > array[i]) {
        min = array[i];
      }
      if (max < array[i]) {
        max = array[i]; 
      }      
    }

    return [min, max];
  }



// Write a function to find the median element of array.

var array = [1, 8, 4, 9];
console.log(medium(array));

function medium() {
  if (array.length % 2 === 1) {
    var element;
    element = array[parseInt(array.length/2)]
  }else {
    return 'array don\'t have medium element'
  }
  return element;
}

 

// Write a function to find the element that occurs most frequently.

var array = [1,1,2,2,3];
console.log(mostFrequently(array)); 


function mostFrequently(array) {
  var numberOfRepeat = 1;

  for (var i = 0; i < array.length; i++) {
    var br = 0;
    for (var j = i; j < array.length; j++) {
      if (array[i] === array[j]) {
        br++;
      }      
    }
      if (br > numberOfRepeat) {
        numberOfRepeat = br;
        mostFrequently = array[i];

      }

          
  }
  return mostFrequently;
}


// Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.

var array = [1, 5, 8, 9,6 ];
console.log(firstMiddleLastElement(array));


function firstMiddleLastElement(array) {
  var j = 0;
  var newArray = [];
  if (array.length === 0 || array.length === 1) {
    return array;
  }
  if (array.length % 2 === 1) {
    newArray = [array[0],array[parseInt(array.length/2)],array[array.length-1]]
  }else {
    newArray = [array[0],array[array.length-1]]
  }
  
  return newArray;
}
 

// Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

 

// Write a function to find all the numbers greater than the average.

var array = [1,4,9,6,4,2,50,1,1,1]
console.log(greaterThanAverage(array));

function greaterThanAverage(array) {
  var sum = 0;
  var average;
  var newArray = [];
  var j = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];     
  }
  average = sum/2;
  for (var i = 0; i < array.length; i++) {
    if(array[i] > average){
      newArray[j] = array[i];
      j++;
    }    
  }

  return [newArray, average];
} 

// The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// Starvation: less than 15
// Anorexic: less than 17.5
// Underweight: less than 18.5
// Ideal: greater than or equal to 18.5 but less than 25
// Overweight: greater than or equal to 25 but less than 30
// Obese: greater than or equal to 30 but less than 40
// Morbidly obese: greater than or equal to 40

var weight = 87;
var height = 1.93;
console.log(bmi(weight,height));

 
function bmi(weight,height) {
  var bmi;
  bmi = weight / (height*height);
 console.log(bmi)
  if (bmi < 15) {
    return 'Starvation'
  }
  else if (bmi < 17.5) {
    return 'Anorexia'
  }
  else if (bmi < 18.5) {
    return 'Underweight'
  }
  else if (bmi < 25 && bmi >= 18.5) {
    return 'ideal'
  }
  else if (bmi < 30 && bmi >= 25 ) {
    return 'Overweight'
  }
  else if (bmi < 30 && bmi >= 40 ) {
    return 'Obese'
  }
  else if (bmi >= 40 ) {
    return 'Morbidly obese'
  } 
}

// Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

function printsArrayInFrame(array) {
  var rectangleWidth = array[0].length;
  var borderRow = '';
  var nthRow = '';

  for (var i = 1; i < array.length; i++) {
    if(array[i].length > rectangleWidth) {
      rectangleWidth = array[i].length;
    } 
  }
  for ( var i = 0; i < rectangleWidth + 4; i++) {
    borderRow += '*';
  }
  for (var i = 0; i < array.length; i++) {
   var blank = ' ';
    for (var j = array[i].length; j < rectangleWidth; j++) {
      blank += ' ';
    }
    nthRow += '* ' + array[i] + blank + '*' + '\n'
  }
  var arrayInFrame = borderRow + '\n' + nthRow + borderRow;
  return  arrayInFrame;
}
console.log(printsArrayInFrame(["Hello", "World", "in", "a", "frame"]));
