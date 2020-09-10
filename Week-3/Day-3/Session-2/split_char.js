var string = "Given an array and";
var arrayChar = [];
var i = 0;
var char = ""
while (i <= string.length-1){
    char = string[i];
    if (char !== " "){
    arrayChar.push(char);
    }
    i++
}
console.log(arrayChar);
// [g,i,v,e,n,a,n,]