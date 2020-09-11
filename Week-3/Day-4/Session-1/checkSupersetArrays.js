var arrayFirst = [1,2,9,10,3,4,6];
var arraySecond = [5,4,6];

superSetArray(arrayFirst);

function superSetArray(firstArray){
    matchStatus = false;
    matchCount = 0;
    for (var i = 0; i <= firstArray.length-1; i++){
        var char = firstArray[i];
        for (var j = 0; j <= arraySecond.length-1; j++){
             var char2 = arraySecond[j];
             if (char == char2){
             matchStatus = true;
             matchCount = matchCount +1;
            }
             else{
                matchStatus = false;
            }
        }
         
    }
    if (matchCount == arraySecond.length){
        console.log(arrayFirst, "SuperSet of" , arraySecond)
    }
    else{
        console.log("Try another array")}
}