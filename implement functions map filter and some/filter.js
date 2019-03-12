function filter(f) {
    var newArry = [];
    var j = 0;
    for ( var i = 0; i < this.length; i++) {
        if (f(this[i])) {
            newArry[j++] = this[i];
        }
    }
    return newArry;
} 

Array.prototype.myFilter = filter;

var a = [1,2,3,4,5];

function isBigger(element) {
    return element > 3;
}

var result = a.myFilter(isBigger);
console.log(result);