var stringCheck = "12321git";
var stringLowerCase = stringCheck.toLowerCase();
var string = ""

for (var i = 0; i <= stringLowerCase.length-1; i++){
    var char = stringLowerCase[i];
        if (char !== " "){
            string = string + char;
        }
}
// console.log(string);

wordPalindrome(string);

function wordPalindrome(word){
    var result = false;
    var size = word.length-1;
    for (var i = 0; i <= size; i++){   
       if( word[0+i] == word[size-i]){
           result = true;
       }else{
           result = false;
           break;
       }
    }
if (result){
    console.log('String', string,"is Pelindrome")}
if (!result){
    console.log('String', string,"is not Pelindrome")  
}
}


