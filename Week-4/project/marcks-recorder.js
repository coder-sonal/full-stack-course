var studentsData = [];

function register() {
    var studentArray = {
        name: document.getElementById("name").value,
        grade: document.getElementById("grade").value,
        section: document.getElementById("section").value,
        examType: document.getElementById("exam").value,
        subject: document.getElementById("sub").value,
        marks: document.getElementById("score").value
        };
    document.getElementById("name").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("section").value = "";
    document.getElementById("exam").value = "";
    document.getElementById("sub").value = "";
    document.getElementById("score").value = "";
 studentsData.push(studentArray);
}

function create(event) {
    clearData();
    if(studentsData.length > 0) {
        for(var i = 0; i < studentsData.length; i++) {
            // document.getElementById("img").style.backgroundImage = "none";
            var details = document.createElement("div");
            details.className = "details";
            details.style.width = "100%";
            details.style.margin = "20px";
            details.style.color = "white";
            if(event.value === "name"){
                // For Name
                var name = document.createElement('p');
                name.innerHTML = studentsData[i].name;
                details.appendChild(name);
            }else if(event.value === "grade"){
                // For Grade
                var grade = document.createElement('p');
                grade.innerHTML = studentsData[i].grade;
                details.appendChild(grade);
            }else if(event.value === "section") {
                // For Section
                var section = document.createElement("p");
                section.innerHTML = studentsData[i].section;
                details.appendChild(section);
            }else if(event.value === "exam"){
                // For ExamType
                var exam = document.createElement("p");
                exam.innerHTML = studentsData[i].examType;
                details.appendChild(exam);
            }else if( event.value === "subject"){
                // For Subject
                var subject = document.createElement("p");
                subject.innerHTML = studentsData[i].subject;
                details.appendChild(subject);
            }else if( event.value === "avg"){
                // For Avg
                var average = avggg();
                var avg = document.createElement("p");
                avg.innerHTML = average;
                details.appendChild(avg);
            }else if( event.value === "min"){
                // For Min
                var min = document.createElement("p");
                min.innerHTML = minnn();
                details.appendChild(min);
            }
            else if( event.value === "max"){
                // For Max
                var max = document.createElement("p");
                max.innerHTML = maxxx();
                details.appendChild(max);
        }
        document.getElementById("img").appendChild(details);
        }
    }
}

function clearData() {
    var parent = document.getElementById("img");
    var datas = document.getElementsByClassName("details");
    for(var i = 0; i < datas.length; i++) {
        parent.removeChild(datas[i]);
        i--;
    }
    document.getElementById("img").style.backgroundImage = "url('https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')";
}

function avggg(){
    var avg = 0;
    var totalMarks = 0;
    for(var i = 0; i < studentsData.length; i++){
        
        var  mks = parseInt(studentsData[i].marks);
        totalMarks += mks;
    }
    avg = totalMarks/studentsData.length;
    return avg;
}

function minnn(){
    var min = 0;
    var totalMarks = 0;
    for(var i = 0; i < studentsData.length; i++){
        debugger
        var  mks = parseInt(studentsData[i].marks);
        totalMarks += mks;
        
    }
    min = totalMarks[i];
    return min;
}

function maxxx(){
    var max = 0;
    var totalMarks = 0;
    for(var i = 0; i < studentsData.length; i++){
        
        var  mks = parseInt(studentsData[i].marks);
        totalMarks += mks;
    }
    max = totalMarks[totalMarks.length-1];
    return max;
}
