var arrayFirst = [9,2,3,6,3,7,4];
var arraySecond = [3,4,5,6.8,9,5,7,4];
if (arrayFirst.length > arraySecond.length){
    intersectionArrays(arraySecond,arrayFirst);
}else{
    intersectionArrays(arrayFirst,arraySecond);
}


    
function intersectionArrays(a1,a2){
    var result = {};
   for (var j=0; j<=a1.length-1; j++){
        var v1 = a1[j];
        for (var i=0; i<=a2.length-1; i++){
        var v2 = a2[i];
            if (v1 === v2){
            result[v1] ="";
            }
        }
   }
    var finalArr=[];
    for (key in result){
        finalArr.push(parseInt(key));
    }
    console.log(finalArr);
}

