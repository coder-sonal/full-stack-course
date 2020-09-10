var splitChar = " ";
var string = "Sum of all the even numbers";
var strLength = string.length-1;
var i = 0;
var splitStr =[];
var element="";

while (i <= strLength){
    var char = string[i];
    if (char !== " "){
        element = element + char;
    }
    else{
        splitStr.push(element);
        element = "";
    }
    i++;
}
console.log(splitStr);
// ["Sum", "of", "all", "the", "even", "numbers"];