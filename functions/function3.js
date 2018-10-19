
// Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

var position = 1;


function insertNewString(string1,string2,position){
var newString = '';
var j = 0;

    for (var i = 0, j = 0; i < string1.length, j < string1.length; i++) {
        if(position-1 === i){
            newString += string2;    
        }
        else{
            newString += string1[j];
            j++;
        }
        
    }return newString;
}

console.log(insertNewString('My random string','JS ',4));



// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]


function join(array){
var string = ''

    for (var i = 0; i < array.length; i++) {
    
        if(!!array[i] && isFinite(array[i]) || array[i] === 0){
            string += array[i];
        }

    }
    return string;
}
console.log(join([NaN, 0, Infinity, false, -22, '', undefined, 47, null]));



// Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]


function filter(array){
var newArray = [];

    for (var i = 0, j = 0; i < array.length; i++) {
        
        if (!!array[i]) {
            newArray[j] = array[i];
            j++;
        }
        
    }
    return newArray;
}

console.log(filter([NaN, 0, 15, false, -22, '', undefined, 47, null] ));



// Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number


function reversNumber(number){
var string = '' + number;
var reversString = '' 

    for (var i = string.length - 1, j = 0; i >= 0; i--, j++) {
        reversString += string[i]; 

    }
    
    number = parseInt(reversString);
    
    return number;
}

console.log(reversNumber(12345));



// Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]  

n = 1;
function lastElements(array,n){  
var lastE = [];

    for (var i = array.length-1, j = n-1; i <= array.length-n && i > 0, j >= 0; i--, j--) {
          lastE[j] = array[i];
    }
    return lastE;

}

console.log(lastElements([7, 9, 0, -2],n));



// Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null] 


function pre_filledNumber(element,numberOfElements){
var array = [];
    for (var i = 0; i <= numberOfElements - 1; i++) {
        array[i] = element;
        
    }
    return array;
}

console.log(pre_filledNumber('none',0));



// Write a function that says whether a number is perfect.

// 28 -> 28 is a perfect number. 


function perfectNumber(number){
var sum = 0;

    for ( i = 1; i < number; i++) { 
        if(number % i === 0){
            sum += i;
        }   
    }
    if(number === sum){
        return true
    }else{
        return false
    }
}

console.log(perfectNumber(8128))



// Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"


function wordInString(string,word){
var array = [];
var stringWord = '';
var br = 0;
    for (var i = 0, j = 0; i < string.length; i++){
       
        if (string[i] === ' ') {
            j++
            stringWord = '';
        }else{
            stringWord += string[i];
            array[j] = stringWord;
        }
        
        if (array[j] === word){
            br++
        }
    }
    
    return br;
}

console.log(wordInString('aa, bb, cc, dd, aa', 'fox'));



// Write a function to hide email address.

// "myemailaddress@bgit.rs" -> "myemail...@bgit.rs"


function hideMail(mail){
var newMail = ''

    for (let i = 0; i < mail.length; i++) {
        if( mail[i] === '@'){
        var addressLength = i
        
        }
    }
    for (let i = 0; i < mail.length; i++) {
    
        if(i < parseInt(addressLength/2) || i >= addressLength){
            newMail += mail[i];
        }
        else if( i === addressLength/2){
            newMail += '...'
        }
        
    }  

return newMail;
}

console.log(hideMail('kris.rsi@gmail.com'));



// Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,3,3,3]


function mostFrequent(array){
    var repetition = 1;
    
    for (var i = 0; i < array.length; i++) {
    var br = 0;

        for (var j = i; j < array.length; j++) {
            if(array[i] === array[j]){
                br++;
            }   
        }
        if(repetition < br){
            repetition = br
           var mf = array[i];
        }

    }
    return mf;
}
    
console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));













