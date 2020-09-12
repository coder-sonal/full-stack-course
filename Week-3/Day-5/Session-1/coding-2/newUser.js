var name = "Sonal Singh";
var email = "snsonali62@gmail.com";
var password = "XXXXXXXXXXX";
var userDetails = {};
newUser(name,email,password);

function newUser(userName,userEmail,userPassword){
    userDetails.name = userName;
    userDetails.email = userEmail;
    userDetails.password = userPassword; 
}
console.log(userDetails);