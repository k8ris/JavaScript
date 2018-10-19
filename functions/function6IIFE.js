// IIFE = Immediately Invoked Function Expressions

// Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
// 	Input array: [4, 5, 11, 9]
// 	Output array: [ 9, 5, 11, 4]



(function (array) {
  console.log(array);
  var temp = 0;

  temp = array[0];
  array[0] = array[array.length-1];
  array[array.length-1] = temp;
  
  console.log('after rotating arrays',array);
})([4, 5, 11, 9]);

// Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
// Input: 4 5
// Output: 20 



(function (a,b) {
  var surface = 0;

  surface = a * b;
  console.log(surface)

})(4,5);
 

// Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
// 	Input: prograMming
// 	Output: progra**ing, 2



(function (string,letters) {
  var numberOfLettersInString = 0;
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === letters || string[i].toLowerCase() === letters) {
            newString += "*";
            numberOfLettersInString++
            continue
    }
     newString += string[i]

  }
  console.log(newString,numberOfLettersInString);

})('programMing','m');


// Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
// Input: pera peric
// 	Output: pera.peric@gmail.com




(function (name,surname) {
    var email = '';

    email = name + '.' + surname + '@gmail.com';

    console.log('mail address is: ' ,email)

})('kristina','raickovic')


// Write a function that returns a function that calculates a decimal value of the given octal number. 
// Input: 034
// Output: 28



var getOctalToDecimalConverter = function () {

  function isOctalNumber(number) {
    return (number[0] === '0')
  }
  
  function convert(number) {
    var decimal = 0;
    var j = 0;
    
    for (var i = number.length - 1; i >= 0; i--) {
        decimal += number[j] * 8 ** i;
        j++;
        }return decimal;
         
  }
  return function (value) {
    if (!isOctalNumber(value)) {
      return 0;
  }
  return convert(value)
         }

}

var octalToDecimalConverter = getOctalToDecimalConverter();
var decimalValue = octalToDecimalConverter('034')

console.log(decimalValue)
// Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid. 
// Input: JSGuru 
// Output: Your password is invalid!

// 	Input: JSGuru123
// 	Output: Your password is cool! 



function checkPassword(password,goodPassword,badPassword) {
  
  if (password.length <= 6 && typeof password !== 'string'){
    return false;
  } 
  function isPasswordValid(password) {
    for (var  i = 0; i < password.length; i++) {
      if (isNumeric(password[i])) {
        return true;
      }  
    }
    return false;
  }
  function isNumeric(n) {
    return  !isNaN(parseFloat(n)) && isFinite(n)
  }
 return isPasswordValid(password) ? goodPassword() : badPassword();
};

checkPassword('JSGguru',
function () { console.log('Your password is valid')},
function () { console.log('Your password is invalid')}
)

// Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
// Input:[2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3] ; 




function filter(array, condition) {
  var j = 0;
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    if (condition(array[i])) {
      newArray[j] = array[i];
      j++
    }
  }
  return newArray;


}
var filteredArray = filter ( [2, 8, 11, 4, 9, 3], function(element) {return (element % 2 !== 0)})

console.log (filteredArray);
