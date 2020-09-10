var num = 1;
var avgNum = 0;
var totalSum = 0;
var dividNum = 5;
var numRange = 20;
var countNum = 0;
while ( num <= numRange){
    if (num % dividNum == 0){
        totalSum = totalSum + num;
        countNum = countNum + 1;
    }
    num++;
}
console.log("Total sum of given range "+totalSum);
avgNum = totalSum/countNum;
console.log("Average of all the numbers from 0 to the given limit that are divisible by the given number "+avgNum);