var email = "smysite@masai.school.net";
checkEmail(email);

function checkEmail(email) {
    var isFound = false;
    var count = 0;
    for(var i = 0; i < email.length; i++) {
        if(i === 0 && email[i] === '@') {
            break;
        }
        if(email[i] === '@') {
            isFound = true;
            count++;
        }
        if (email[0] ==="."){
            break;
        }
        if (email[i] === '@' && email[i+1] === "."){
            break;
        }
        if (email[i] === "*" || email[i] === "()" || email[i] === "/"){
            break;
        }
        if (email[i] === '.' && email[i+1] === "."){
            break;
        }
    }
    if(isFound && count === 1) {
        console.log('Valid');
    }
    else{
        console.log('invalid');
    }
}