var student = [{name : "Aman", marks : 70},
               {name : "Aarav", marks : 50},
               {name : "Ajay" , marks : 80},
            {name : "Chetan", marks :30}];


var finalResult = student.map(function(result){
    if (result.marks >= 90){
        result.grade = 'A';
    }
    else if (result.marks < 90 && result.marks >= 80){
        result.grade = 'B';
    }
    else if (result.marks < 80 && result.marks >= 60){
        result.grade = 'C';
    }
    else if (result.marks < 60 && result.marks >= 40){
        result.grade = 'D';
    }
    else if (result.marks < 40){
        result.grade = 'F';
    }
    return (result);
})
console.log(finalResult);