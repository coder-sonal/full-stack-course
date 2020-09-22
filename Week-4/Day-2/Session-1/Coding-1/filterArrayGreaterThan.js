var arr = [1,4,9,3,6,87,4];
var tValue = 60;

var finalArr = arr.filter(function(a){
    return a < tValue;
},tValue);

console.log(finalArr);