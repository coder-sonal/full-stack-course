
var count = 0;
var studentResut = {
    name: "Sonal Singh",
    marks: [63,50,63,63,82,63,86,77],
    targetMarks: 63
    }

countDuplicate(studentResut);
var duplicateCount = [];

function countDuplicate(details){
    var score = details.marks;
    
    for (var i = 0; i <= score.length-1; i++){
        var num = score[i];
        if (num == details.targetMarks){
            count = count + 1;
        }
    }
    return count;
} 

duplicateCount.push(count);
console.log(duplicateCount);