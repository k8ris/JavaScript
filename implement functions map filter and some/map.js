function map(f) {
    var newArray = [];
    for ( var i = 0; i < this.length; i++) {
        newArray[i] = f(this[i]);
    }
    return newArray;
} 

Array.prototype.myMap = map;

var a = [1,2,3,4,5];

function addTwo(x) {
    return x + 2;
}

var result = a.myMap(addTwo);
console.log(result);