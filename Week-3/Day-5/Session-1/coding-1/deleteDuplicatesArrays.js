var arrayToBeChecked = [1,2,1,3,4,5,3,2];
deleteDuplicate(arrayToBeChecked);

function deleteDuplicate(arr){
    var uniqueData = {};
    uniqueData[arr[0]] = "ABC";
    for(var i = 0; i < arr.length; i++) {
        uniqueData[arr[i]] = "DEF";
    }
    var resultArr = [];
    for(key in uniqueData) {
        resultArr.push(parseInt(key));
    }
    console.log(resultArr);
}
