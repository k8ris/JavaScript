// Write a program that calculates the maximum of two given numbers. 

var a = 9, b = 3

function max (a,b){

    if (a>b){
    return a
    }
    else{
    return b
    }
}

console.log(max (a,b))

// Write a program that checks if a given number is odd.

function odd(a){

    if (a%2 !== 0){
        return 'number is odd'

    }else{
        return 'number is even'
    }
}

console.log(odd(5)); 


// Write a program that checks if a given number is a three digit long number.

function numberLength(a,b){
    a = ''+a;

    if(a.length === b){
    return 'yes'
    }else{
    return 'no'
    }
  
} 

console.log(numberLength(7659,3))


// Write a program that calculates an arithmetic mean of four numbers.


function mean(a,b,c,d){

    var sum = a+b+c+d;
    var delilac = ""+a+b+c+d;
    var arithmeticMean = sum/delilac.length;
    return arithmeticMean

}

console.log(mean(1,2,3,4)); 


// Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
// *****
// *    *
// *    *
// *    *
// *****

var   e = ''
var   n = 5;

for(var i = 0 ; i < n ; i++){
var e = '';

    if( i === n-1 || i === 0){
        for(var j = 0 ; j < n ; j++){
        e = e + '*'
        }
    }else if(i !== n-1 || i !== 0){
        e = ''; 
        for(var j = 0 ; j < n ; j++){
            
            if( j === 0 || j === n-1){
            e= e + '*';
            }else{
            e = e + ' ';
            }
        }
    }
    console.log(e); 
} 



// Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:


var a = 5;
var b = 3;
var c = 7;

for(var i = 0; i<3 ; i++){
    
    if( i === 0){
        stars = ''
        n = a;

        for(var j = 0; j<n ; j++){
        stars = stars + '*';

      }
    }else if( i === 1){
        stars = ''
        n = b;

        for(var j = 0; j<n ; j++){
        stars = stars + '*';

      }
    }else{ 
        stars = ''
        n = c;
        for(var j = 0; j<n ; j++){
        stars = stars + '*';
      }
    } 
    console.log(stars)
}



// Write a program that calculates a number of digits of a given number. 


function numberOfDigits(a){

    a = a + '';
    nod = a.length;
    return nod;
    
} 

result = numberOfDigits(76543);
console.log(result);



// Write a program that calculates a number of appearances of a given number in a given array.


function numberOfElement(a,e){
var br = 0;
    for(var i = 0; i<a.length; i ++){

        if( a[i]=== e){
            br++
        }
    }return br;
}

result = numberOfElement([1,3,1,5,1,56],1);
console.log(result); 



// Write a program that calculates the sum of odd elements of a given array. 


function numberOfOddNumber(a){
var sum = 0;

    for(var i = 0; i<a.length; i ++){

        if( a[i]%2 !== 0 ){
            sum += a[i]
        }
    }
    return sum;
}

result = numberOfOddNumber([1,2,3,4,5,6]);
console.log(result); 

// Write a program that calculates the number of appearances
// of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.


function numberOfLetters(string){
var br = 0;
    for(var i = 0; i<string.length; i ++){
        if(string[i] === 'a' || string[i] === 'A'){
            br++
        }
    }
    return br;
}

result = numberOfLetters('kristina MARIJA');
console.log(result);



// Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 


function concatenatesString(string,n){
var a = '';
    for( var i = 0; i<n; i++){
        a += string;
    }
    return a;
}

result = concatenatesString ('kristina',3);
console.log(result);















