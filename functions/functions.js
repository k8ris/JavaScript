// Write a function that checks if a given element e is in the array a. 
// example:  e = 3, a = [5, -4.2, 3, 7]

var a = [5, -4.2, 3, 0];
var e = 5;

function check(a,e){
    
    // if (a.length < 1 || !e){
    //     return false;
    // } provera da li je prazan niz i da li su vrednosti cija negacija daje
    // false vrednost ( NaN, underfined, null, 0)

    for (var i = 1; i<a.length; i++){

        if ( a[i] === e ){
            return true;
        }  
    }
}
if ( check(a,e)){

    console.log('yes');

}else { 

    console.log('no');

}

// Write a function that multiplies every positive element of a given array by 2.
var a = [-3, 11, 5, 3.4, -8]; 

function multiplies(a){

    for(var i = 0; i<a.length; i++){
        a[i] = a[i] *2;
    }
return a
}

console.log(multiplies(a))

// Write a function that finds the minimum of a given array and prints out its value and index. 
var a = [4, 2, 2, -1, 6]; 

function min(a){ 

    var min = a[0];
    var minIndex = 0;

    for(var i = 1; i<a.length; i++){
        if( min >= a[i]){
            min = a[i];
            minIndex = i;
        }

    }
var minElement = [min,minIndex];
return minElement;
}

console.log(min(a));


// Write a program that finds the second smallest number and prints out its value. 
var a = [4, 2, 2, -1]; 

function secMin(a){ 

    var min = a[0];
    var secMin = a[1];

    for(var i = 2; i<a.length; i++){
    
        if( secMin > a[i] ){
        secMin = a[i];  
        }
        if(secMin<min){
           var saveMin = min;
           min = secMin;
        }
        secMin =saveMin;
        
    }
return secMin
}

console.log( secMin(a) );

// Write a function that calculates the sum of positive elements in the array.
var a = [3, 11, -5, -3, 2]; 

function sumOfPositiveElement(a){
    var sum = 0;

    for(var i = 0; i<a.length; i++){
        if(a[i]>0){
            sum += a[i];
        }
    }
    return sum;
}

console.log(sumOfPositiveElement(a));


// Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
var a = [2, 4, -2, 7, -2, 4, 2]; 

function symmetric(a){
    var br = 0

    for(var i = 0 ,j = a.length-1; i<a.length, j > -1; i++, j--){
        if ( a[i] === a[j]){
            br++
        }
    }
    if(br===a.length){
        return true
    }else{return false}
}

console.log(symmetric(a)? 'array is symmetric':'array is not symmetric')


// Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
var a = [4, 5, 6, 2], b= [3, 8, 11, 9];c = [];

function intertwinesArrays(a,b){

    for( var i = 0, j = 0; i<a.length, j<(a.length+b.length); i++,j++){
    
        c[j] = a[i];
        c[++j] = b[i];

    }
return c
}

console.log(intertwinesArrays(a,b));


// Write a program that concatenates two arrays. 
var a = [4, 5, 6, 2],b = [3, 8, 11, 9]; c = [];


function concatenates(a,b){

    for( var i = 0, j = a.length; i<a.length, j<(a.length+b.length); i++,j++){
        c = a;
        c[j]=b[i];
    }
return c    
}
console.log(concatenates(a,b))

// Write a program that deletes a given element e from the array a. 
var e = 2, a = [4, 6, 2, 8, 2, 2]; c = [];


function deleteElement(a,e){

    for ( var i = 0 , j = -1; i<a.length; i++){

         if (e !== a[i]){
             c[++j]=a[i];
         
         }
        
    }
    return c
}

var result = deleteElement(a,e);
console.log(result); 


// Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
var e = 78, p = -1, a = [2, -2, 33, 12, 5, 8], c = [];


function insertElement(a,p,e){

    if( p < a.length+1 && p>-1 ){

      for(var i = 0, j = 0; i<a.length, j<a.length+1; i++,j++){

        if(i === p){
        c[j] = e;
        c[++j] = a[i];
        }else{
        c[j] = a[i];
        }

    }
    return c
    }else{
        return 'error';
    }
}
var result = insertElement(a,p,e);

console.log(result)















