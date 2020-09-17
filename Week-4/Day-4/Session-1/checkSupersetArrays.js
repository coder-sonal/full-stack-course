setOne = ["a"];
setTwo = ["a","b","c","d","e"," "];

if (setOne.length-1 > setTwo.length){
    subSetResult = checkSubsetArrays(setOne,setTwo)
}else{
    subSetResult = checkSubsetArrays(setTwo,setOne)
}

function checkSubsetArrays(s1,s2){
    var matchCount = 0;
    for (var i=0; i<=s1.length-1; i++){
        var value1 = s1[i];
        var matchFound = true;
        for (var j=0; j<=s2.length-1; j++){
            var value2 = s2[j];
            if (value1 === value2){
                matchFound = true;
                matchCount++;
            }
        }
    }
    if (matchCount === s2.length){
        return true;
    }else{
        return false;
    }
}
console.log(subSetResult);