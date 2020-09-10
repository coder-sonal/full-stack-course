var numList =[10, 5, 5, 5];
var evenSum = 0;
for (var i=0; i <= numList.length-1; i++){
    var num = numList[i];
    if (num % 2 == 0){
        evenSum = evenSum + num;
    }
}
console.log("Sum of all the even numbers in the given array of numbers is : ", evenSum);