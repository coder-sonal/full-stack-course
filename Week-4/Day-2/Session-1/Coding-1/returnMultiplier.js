var arr = [2,6,3,10,11,9,10];
var tValue = 10;

var multiply = arr.map(function(a){
    return a*tValue;
},tValue)

console.log(multiply)