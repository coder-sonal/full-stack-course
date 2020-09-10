var str = "Sonal Singh Thakur";
var revereString= "";
var length = str.length;
var indexPos = length-1;
while (indexPos >= 0){
    var reverse = str[indexPos];
    revereString = revereString + reverse;
    indexPos--;
}
console.log(revereString);