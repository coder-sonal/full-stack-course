var arrayFirst = [1,2,9,10,3,4,6,55,2,8];
var arraySecond = [5,4,8,1,6,2];

var intersectionArray = [];

intersectFirstSecondArray(arraySecond);

function intersectFirstSecondArray(array){
    var  i = 0;
    var arrayMatched = false;
    for ( i = 0; i <= arraySecond.length-1; i++){
        var char = array[i];
        for (var a = 0; a <= arrayFirst.length-1; a++){
            var char2 = arrayFirst[a];
            if (char == char2) {
                arrayMatched = true;
                break;
            }
            else{
                arrayMatched = false;
            }
        }
    if (arrayMatched){
        intersectionArray.push(char);
    }
    }
    console.log(intersectionArray);
}