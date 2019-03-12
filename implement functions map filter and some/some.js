function some(f) {
    for ( var i = 0; i < this.length; i++) {
       if (f(this[i])){
           return true;
       }else{
           return false;
       };
    }
}

Array.prototype.Mysome = some;
var a = [2,4,6];
function isItOdd(number) {
    if(number % 2 !== 0){
        return true;
    }
}

var b = a.Mysome(isItOdd);
console.log(b);