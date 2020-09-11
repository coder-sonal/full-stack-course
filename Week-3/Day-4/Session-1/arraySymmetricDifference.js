var arrayFirst = [1,2,5,11,9];
var arraySecond = [7,9,2,4];
 
var arrayDifference = [];
diffrenceArray(arrayFirst);

function diffrenceArray(array){
    var i = 0 ;
    var arrayMatch = false;
    for (i = 0; i <= array.length-1; i++){
     var char = array[i];
        for (var a = 0; a <= arraySecond.length-1; a++){
            var char2 = arraySecond[a];
            if (char == char2){
                arrayMatch = true;
                break;
            }
            else{
                arrayMatch =false;
            }
        }
    if (!arrayMatch){
         arrayDifference.push(char);
          }  
    }
}

diffrenceArray2(arraySecond)
function diffrenceArray2(array){
    var i = 0 ;
    var arrayMatch = false;
    for (i = 0; i <= array.length-1; i++){
     var char = array[i];
        for (var a = 0; a <= arrayFirst.length-1; a++){
            var char2 = arrayFirst[a];
            if (char == char2){
                arrayMatch = true;
                break;
            }
            else{
                arrayMatch =false;
            }
        }
    if (!arrayMatch){
         arrayDifference.push(char);
          }  
    }
    console.log("YmitricDifference of Array", arrayFirst, "and",arraySecond, "is", arrayDifference);
}