var userDetails = {
    firstName: "Sonal",
    lastName: "Singh",
    email: "snsonali62@gmail.com",
    creditLimit: 80000,
    status: "Basic",
}
var status = "Prklcekl" ;
checkStatus(userDetails, status);

function checkStatus(userData, statusNew){
    
    if(userData.status) {
        if (statusNew ==="Basic"){
            userData.creditLimit = 80000;
            userData.status = statusNew
        }
        else if (statusNew === "Preminum"){
            userData.creditLimit = 300000;
            userData.status = statusNew;
        }
        else if (statusNew === "Platinum"){
            userData.creditLimit = 600000;
            userData.status = statusNew;
        }
        else{
            console.log("Invalid Entry")
        }
    }
    else {
        console.log(" invalid input as response");
    }
}
console.log(userDetails);
