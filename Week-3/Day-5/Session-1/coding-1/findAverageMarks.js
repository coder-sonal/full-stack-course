var student = {
    name: "Sonal Singh",
    marks: [50,30,100,80]
}
var average = 0;
averageMarks(student)
console.log("Average marks of",student.name , "is",average);

function averageMarks(studentMarks){
    var marks = student.marks;
    // console.log(marks);
    var sum = 0;
    for (var i = 0; i <= marks.length-1; i++){
        sum = sum + marks[i];
    }
    average = sum / marks.length;
    return average;
}


