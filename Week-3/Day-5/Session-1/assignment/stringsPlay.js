
var convertString = "Change  Me";
convertString = convertString.toLowerCase();
var emptyString = "";
var isCharFound = false;

for (var a = 0; a <= convertString.length-1; a++){
    var elemant = convertString[a];
    if ( elemant !== " " && !isCharFound){
        emptyString = emptyString  + elemant;
        isCharFound = true;
    }
    else if(elemant !== " " && isCharFound) {
        emptyString = emptyString  + elemant;
    }else if(elemant === " " && isCharFound && convertString[a+1] !== " ") {
        emptyString += " ";
    }
}

hypenCase(emptyString);
snakeCase(emptyString);
camelCase(emptyString);

function hypenCase(word){
var changedCase = "";
    for (var i=0; i<=word.length-1; i++){
        var char = word[i]
        if (char == " " || char == "_"){
           changedCase = changedCase + "-";
        }
        else if (char !== " " ){
            changedCase = changedCase + char;
        }
    }
console.log("HYPEN CASE", changedCase);   
}

function snakeCase(word){
    var changedCase = ""; 
    for (var i=0; i<=word.length-1; i++){
        var char = word[i]
        if (char == " " || char == "-"){
           changedCase = changedCase + "_";
        }
        else if (char !== " " ){
            changedCase = changedCase + char;
        }
    }
console.log("SNAKE CASE", changedCase);   
}

function camelCase(word){
    var changedCase = "";    
    for (var i=0; i<=word.length-1; i++){
        var char = word[i]
        if (char == " " || char == "_" || char == "-"){
           changedCase = changedCase + word[i+1].toUpperCase();
           i = i+1;
        }
        else if (char !== " " ){
            changedCase = changedCase + char;
        }
    }
console.log("CAMEL CASE", changedCase);
}