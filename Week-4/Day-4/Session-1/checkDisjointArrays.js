var firstArray = [1,3,4,6,2,7,4,7];
var secondArray = [1];

var result = checkDisjoint(firstArray,secondArray);
console.log(result);

function checkDisjoint(primary,secondary){
    var valueMatched = false;
    for (var i = 0; i <= primary.length-1; i++){
        var value1 = primary[i];
        for (var j = 0; j <= secondary.length-1; j++){
            var value2 = secondary[j];
            if (value1 === value2){
            valueMatched = true;
            break;
            }
        }
        if (valueMatched){
            return false;
            break;
        }
    }
    if (!valueMatched){
        return true;
    }
}
