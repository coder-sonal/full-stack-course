var userDitails = {
    firstName: "Sonal",
    lastName: "Singh",
    email: "snsonali62@gmail.com",
    password:  "abc@Sonal"
}
var userPassword = "abc@Sodnal";
var passwordMatch = false;
passwordVerify(userDitails,userPassword);

function passwordVerify(userData,pwd){
    var match = userData.password;
    if (match == pwd){
        passwordMatch = true;
    }
    else{
        passwordMatch = false;
    }
}
console.log(passwordMatch);