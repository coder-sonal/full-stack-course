var boxOne = [10,9];
var boxTwo = [1,3,9,22,8];

if (boxOne.length > boxTwo.length){
    result = checkSubset(boxTwo , boxOne);
}
else{
    result = checkSubset(boxOne , boxTwo);
}

function checkSubset(setOne , setTwo){
    for (var i=0; i<=setOne.length-1; i++){
        var value1 = setOne[i];
        var matchFound = false;
        for (var j=0; j<=setTwo.length-1; j++){
            var value2 = setTwo[j];
            if (value1 === value2){
                matchFound = true;
                break
            }
        }
        if (!matchFound){
            return false;
        }
    }
    if (matchFound){
        return true;  }  
}
console.log(result);