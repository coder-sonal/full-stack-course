var arr = [2,6,3,10,11,9,10];
var tValue = 10;
var newArr= [];
arr.forEach(function(a){
    if (a !== tValue){
        var square = 0;
        square = a*a;
        newArr.push(square);
    }
},tValue);

console.log(newArr);

