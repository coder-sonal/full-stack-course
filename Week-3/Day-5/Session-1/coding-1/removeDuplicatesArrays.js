var arrayToBeChecked = [1,2,1,3,4,5,3,2];
removeDuplicate(arrayToBeChecked);

function removeDuplicate(array){
    var i = 0;
    for (i=0; i <= array.length-2; i++){
        var char = array[i];
        for ( var a = i+1; a <= array.length-1; a++){
            var char2 = array[a];
            // console.log(char2);
            if (char == char2){
            array.splice(a,1) ;
            }  
        }
    }
    console.log(array);
}
// [1,2]