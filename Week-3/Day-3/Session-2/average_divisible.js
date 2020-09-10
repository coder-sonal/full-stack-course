var dividendNum = 2;
var sumNum = 0;
var rangeNum = 10;
var countNum = 0;
for (var num = 1; num <= rangeNum  ; num++){
    if ( num % dividendNum == 0){
        sumNum = (sumNum + num);
        countNum = countNum + 1;
    }
}    
console.log("Total sum of given range "+sumNum);
var averageNum = sumNum/countNum;
console.log("Average of all the numbers from 0 to the given limit that are divisible by the given number "+averageNum);