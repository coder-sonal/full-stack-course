var arrayFirst = [1,2,5,11,9];
var arraySecond = [7,9,2,4];

disjoints(arrayFirst);

function disjoints(arrayOne){
    var i = 0;
    var matchFound = false;
    for (i=0; i <= arrayOne.length-1; i++){
        var char = arrayOne[i];
        for (var a=0; a <= arraySecond.length-1; a++){
            var char2 = arraySecond[a];
            if (char == char2) { 
                matchFound = true;
                break;
            }
        }
        if(matchFound) {
            console.log("Two given arrays are not disjoints at:", arrayOne[i]);
            break;
        }
    }
    if(!matchFound) {
        console.log("Disjoint Arrays");
    }
}
