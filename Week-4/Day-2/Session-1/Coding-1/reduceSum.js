var arr = [1,4,9,3,6,87,4];
var k = 5;

var filterArr = arr.filter(function(a){
    return a > k;
},k).reduce(function(a,b){
        var sum = a+b;
        return sum})

console.log(filterArr);


