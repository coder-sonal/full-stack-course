var arrayFirst = [1,2,9,10,3,4,6];
var arraySecond = [2,4,6];
subsetArray(arraySecond);

function subsetArray(arrayTwo){
    var i = 0;
    var matchChar = false;
    for (i = 0; i <= arrayTwo.length-1; i++){
        var char = arrayTwo[i];
        for (var a=0; a <= arrayFirst.length-1; a++){
            var char2 = arrayFirst[a];
            if (char == char2){
                matchChar = true;
                break;
            }else {
                matchChar = false;
            }
        }
    }
    if(matchChar){
        console.log("array is a superset of the second array");
    }else {
        console.log("Practise more");
    }
}

