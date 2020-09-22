var arr = [2,6,3,10,11,9,10];
var tValue = 10;
var res= [];
arr.forEach(function(a){
    if (a !== tValue){
        var square = 0;
        square = a*a;
        res.push(square);
    }
},tValue);

console.log(res);

