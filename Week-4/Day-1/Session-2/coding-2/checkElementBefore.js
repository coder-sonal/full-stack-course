var arr = [1,4,2,0,7,3];
var resultArr = arr.map(function (value,index){
         if (arr[index] > arr[index+1]){
            return -1;
        }else{
            return 1;
        }
    })

console.log(resultArr)

// [1,1,-1,1,1,-1]



