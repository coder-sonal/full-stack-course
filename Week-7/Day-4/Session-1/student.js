class Student{
    constructor(name="invalid" , email="invalid" , phone="invalid"){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.avgMarks = 0;
        this.marks = [];
    }
    assignMarks(english=0, maths=0,science=0,sst=0){
        this.marks.push(english,maths,science,sst);
    }
    highestMarks(){
        console.log(Math.max(...this.marks));
    }
    low(){
        console.log(Math.min(...this.marks))
    }
    totalSubjects(){
        console.log(this.marks.length);
    }
    avgMark(){
        this.avgMarks = this.avgMarks + (this.marks.reduce((a, b) => a + b, 0))/this.marks.length;
        console.log(this.avgMarks);
    }
    showMarks(){
        console.log(this.marks);
    }
}
var student1 = new Student("sonal","snsonali62@gmail.com","7881110006");
student1.assignMarks(80,50,70,60);
student1.highestMarks()
student1.low();
student1.totalSubjects();
student1.avgMark();
student1.showMarks();