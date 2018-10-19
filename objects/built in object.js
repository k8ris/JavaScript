// Try to solve all assignments on a separate branch. Keep in mind that you should try to use built-in objects and their methods, solo or combined. You should use loops only for the 4 and 10 assignment, all others can be solved using built-in object methods. 
// Write a function to convert a number from one base (radix) to another. 
// Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;

// 'ff', 16, 8 -> 377

// Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

// 	12345 -> 54321



function reverseNumber(number) {
  number = number + '';
  return parseFloat(number.split('').reverse().join(''));
}

var result = reverseNumber(12345);

console.log(result);
console.log(typeof result);




// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

// “Webmaster” -> “abeemrstw”



function toAlphabeticalOrder(string) {
  
  
  return string.toLowerCase().split('').sort().join('');
}

var result = toAlphabeticalOrder('Webmaster')
console.log(result)




// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"



function toAlphabetizeWord(string) {
    var separateString =  string.split(' ')

    for (var i = 0; i < separateString.length; i++) {
       separateString[i] = separateString[i].split('').sort().join('');
    }
   return separateString.join(' ')
}

console.log(toAlphabetizeWord('Republic Of Serbia'))




// Write a function to split a string and convert it into an array of words.

// 	"John Snow" -> [ 'John', 'Snow' ]



function fromStringToArray(string) {
    return string.split(' ');
}

console.log(fromStringToArray('hello world'));




// Write a function to convert a string to its abbreviated form. 

// 	"John Snow" -> 	"John S."



function abbreviatedFormOfString(string) {
    var arrayOfString = string.split('');
    var indexOfStringAbbreviate = arrayOfString.indexOf(' ') + 1;
    arrayOfString.splice(indexOfStringAbbreviate + 1, string.length - indexOfStringAbbreviate,'.');
    var abbreviatedString = arrayOfString.join('');

    return abbreviatedString;
}

console.log(abbreviatedFormOfString('John Snow'))





// Write a function that can pad (left, right) a string to get to a determined length.

// 	'0000', 123, 'l' -> 0123 
// '00000000', 123, 'r' -> 12300000



function padString(numberOfPosition, number, direction) {
    number = number + ''
  if (direction === 'l' && number.length !== numberOfPosition.length) {
   return result = numberOfPosition.slice(0, numberOfPosition.length - number.length).concat(number)
  }
  if (direction === 'r' && number.length !== numberOfPosition.length) {
   return result = number.concat(numberOfPosition.slice(0, numberOfPosition.length - number.length));
  }
  
}

console.log(padString('0000000000',123,'r'));




// Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"



function capitalizeFirstLetter(string) {
  var newString = string.charAt(0).toUpperCase() + string.slice(1)
  return newString;

}

console.log(capitalizeFirstLetter('js string exercises'));




// Write a function to hide email addresses to protect them from unauthorized users.

// 	"somerandomaddress@example.com" -> "somerand...@example.com"



function hiddenEmailAddress(mail) {
   
  var  localPartLength= mail.indexOf('@');
  var hiddenEmail = mail.split('').slice(0,localPartLength/2).join('') + '...' + mail.split('').slice(localPartLength,mail.length).join('');
  
  return hiddenEmail;
}

console.log(hiddenEmailAddress('somrandomemail@gmail.com'));




// Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//        var LOWER = 'abcdefghijklmnopqrstuvwxyz';

// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"



function swapsString(string) {
 var  arrayFromString = string.split('');
 var swapsString = '';
 for (var i = 0; i < arrayFromString.length; i++) {
   if(arrayFromString[i] !==(arrayFromString[i]).toUpperCase()) {
     arrayFromString[i] =(arrayFromString[i]).toUpperCase();
      swapsString +=  arrayFromString[i];
   }
   else{
     arrayFromString[i] =(arrayFromString[i]).toLowerCase();
     swapsString += arrayFromString[i];
   }   
 } 
  return swapsString
}

console.log(swapsString('The Quick Brown Fox'))