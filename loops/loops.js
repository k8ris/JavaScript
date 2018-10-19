var i = 0;
while(i<10){
    console.log(i*i);
    i++
}

////////////////1////////////////// 
 
for( var i = 0; i<15; i++){

  if (i%2 === 0){
    console.log('even');
  } else{
    console.log('odd');
  }

}

////////////////2////////////////// 
sum = 0;
for ( var i = 0; i<1000; i++){

    if(i%3 === 0 || i%5 === 0){

      sum = sum + i;
    }

} 
console.log(sum); 

/////////////////3///////////////////// 

var a = [1,2,3,4,5,6]
var sum = 0;
var product = 1;
  for ( var i = 0; i<a.length; i++){
      sum += a[i];
      product *= a[i];
  }

console.log('sum is ='+sum,'product is ='+product); 

//////////////////4/////////////////////

var x = ['1','A','B',true,NaN,undefined]
var sum = ''
for(var i = 0; i<x.length; i++){

    sum += x[i];
}
console.log(sum); 

/////////////////5////////////////////
var a = [[1,2,3],[4,5,6]]
var b = [1,2,3,4,5,6]
for(var i = 0; i<a.length; i++){ 
  console.log('row'+ i)
  var x = '';
  for(var j = 0; j<3; j++){
       x = x + a[i][j];
    }
    console.log(x)

}

/////////////////6////////////////

a = [1,2,3,4,5,6,7,
    8,9,10,11,12,13
    ,14,15,16,17,18,19,20,21,22]
var sum = 0;
for(var i = 0; i<5; i++){ 
  sum += (a[i] * a[i])
}
console.log(sum)


/////////////////7///////////////
var students = [['David',80],
                ['Marko',77],
                ['Dany',88],
                ['John',95],
                ['Thomas',68]] 

var sumOfMarks=0;

for (var i = 0;i<students.length; i++){
  sumOfMarks += students[i][1];
} 

var avg = sumOfMarks/students.length;

console.log('averge grade: ' + avg);

if (avg<60){
  console.log('Grade : F')
}else if(avg<70){
  console.log('Grade : d')
}else if(avg<80){
  console.log('Grade : c')
}else if(avg<90){
  console.log('Grade : b')
}else if(avg<100){
  console.log('Grade : a')
}

////////////////8/////////////////

for(var i = 0; i<100; i++){
  if(i%5 === 0 && i%3 === 0){
    console.log(i+'fizz')
  }else if(i%5 === 0 ){
    console.log(i+'buzz')
  }else if (i%3 === 0){
    console.log('FizzBuzz')
  }
  
}



