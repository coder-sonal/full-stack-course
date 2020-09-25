function register(){
    var uName = document.getElementById("name").value;
    var uEmail = document.getElementById("email").value;
    var uContact = document.getElementById("contactNo").value;
    var num = checkNo(uContact);
    var emId = validateEmail(uEmail);
    if(num === true && emId === true){
    console.log(uName,uEmail,uContact);
    document.getElementById("userName").innerHTML = uName;
    document.getElementById("userId").innerHTML = uEmail;
    document.getElementById("userMobile").innerHTML = uContact
    }
    else if(!num){
        document.getElementById("error").innerHTML = "Enter a valid mobile" 
    }
    else if(!emId){
        document.getElementById("error").innerHTML = "Enter a valid Email" 
    }

}
function checkNo(contact){
    var size = contact.length;
    if (size === 10){
        return true;
    }
}
function validateEmail(email){
    var emailValidity = false;
    for (var i=0; i<=email.length-1; i++){
        if (email[0] === '@' && email[0] === "."){
            emailValidity = false;
        }
        if (email[i] === '@' && i !== 0 ){
            emailValidity = true;
        }
        if (email[i] === '@' && email[i+1] === "." || email[i-1] === "."){
            emailValidity = false;
        }
        if(email[i] === "." && email[i+1] === "."){
            emailValidity = false;
        }
        if(email[email.length-1] !== "m"){
            emailValidity = false;
        }
    }
    return emailValidity;
}