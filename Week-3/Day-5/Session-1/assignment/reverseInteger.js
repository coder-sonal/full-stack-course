// var integer = 63;
// var remainder = 23%10;
// integer = integer - remainder;
// var quotient = integer/10;
// var reverse = [];
// reverse.push(remainder);
// reverse.push(quotient);
// console.log(remainder,quotient);

var num = 1234;
num = num.toString();
var length = num.length-1;
var reverse ="";

console.log(length)
for (var i=length; i >= 0; i--){
reverse =reverse + num[i];
}
console.log(reverse);
