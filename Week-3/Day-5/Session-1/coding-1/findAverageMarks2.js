var student = {
    name: "Sonal Singh",
    marks: [50,30,100,80],
    average: function(){
        var score = this.marks;
        var sum = 0;
        for (var i = 0; i <= score.length-1; i++){
            sum = sum + score[i];
        }
        average = sum / score.length;
        console.log("Average marks of",student.name , "is",average)
    }
}
student.average();






