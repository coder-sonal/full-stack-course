var arrayToBeChecked = [1,2,1,3,4,5,3,2];
removeDuplicate(arrayToBeChecked);


function removeDuplicate(array){
    var uniqueArray = [];
    uniqueArray.push(arrayToBeChecked[0]);

    for (var i = 0; i <= array.length-1; i++){
        var isFound = false;
        var value = array[i];
        for (var a = 0; a <= uniqueArray.length-1; a=a+1){
          var element = uniqueArray[a];
            if(value === element) {
                isFound = true;
                break;
            }
        } 
        if (!isFound){
            uniqueArray.push(value);
        }
    }
    console.log(uniqueArray);
}