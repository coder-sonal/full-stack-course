var students = ['Ajay','Akshay','Anusha','Chandrashekhara','Haren','Hasaan','Mahesh','Mousumi','Pavan','Rahul','Sumanta','Venkatesh','Vetrival','Vijayendra'];

$("#createh1").click(function(){
    $("#headings").append("<p>MASAI</p>");
});
$("#createh3").click(function(){
    $("#headings").append("<p>A Transformation in education! and Learn to earn, pay when you get.</p>")
});
$("#createDiv").click(function(){
    for(var i = 10; i > 0; i--){
        var element = document.createElement("div");
        element.innerHTML = "Content" + i;
        $("#headings").after(element);
    }
});
$("#add").click(function(){
    for(var i = 0; i < students.length; i++){
        var elem = document.createElement("li");
        elem.innerHTML = students[i];
        $("#vikings").append(elem);
    }
});
$("#copy").click(function(){
    var element = document.createElement("p");
    element.innerText = "@ masai 2019"
    $("#createh1").before(element);
})