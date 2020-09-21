var num = [2,5,7,8,22,9,35];
num.forEach(function(number){
    var square = number*number;
    console.log(square);
})

var squareRoot = num.map(function(num1){
    var square = num1*num1;
    return square;
})
console.log(squareRoot);