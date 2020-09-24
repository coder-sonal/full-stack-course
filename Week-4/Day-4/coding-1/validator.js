function checkAge(diff){
    var g = document.getElementById("gender").value;
    if(g === "Female"){
        if (diff >= 18){
            alert("Valid Legal Age for"+" "+g)
        }else{
            alert("Not a Valid Legal Age for"+" "+g)
        }
    }
    if(g === "Male"){
        if (diff >= 21){
            alert("Valid Legal Age for"+" "+g)
        }else{
            alert("Not a Valid Legal Age for"+" "+g)
        }
    }
}
function calculateAge(){
    var currentDate =new Date();
    var currentYear = currentDate.getFullYear()
    if (document.getElementById("yob").value <= currentYear){
        var age = currentYear - (document.getElementById("yob").value);
        checkAge(age);
    }else{
        alert("Invalid Year of Birth")
    }
}