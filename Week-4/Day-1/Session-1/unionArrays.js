var arrayFirst = [];
var arraySecond = [3,4,5,6];

var unionArray = arrayFirst;

unionFirstSecond(arraySecond);

function unionFirstSecond(array){
    var i = 0;
    var matchFound = false;
    for (i = 0; i <= array.length-1; i++){
        var char = array[i];
        for (var j = 0; j <= arrayFirst.length-1; j++){
             var char2 = arrayFirst[j];
            if (char == char2){
                matchFound = true;
                break;
            }
            else{
                matchFound =false;
            }
        }
        if (!matchFound){
            unionArray.push(char)
        }    
    }
    console.log(unionArray);
}



