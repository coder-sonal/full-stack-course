
function register(){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:8080/auth/register", true);
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("staticEmail").value,
        password: document.getElementById("password").value,
        username: document.getElementById("userName").value,
        mobile: document.getElementById("mobileNumber").value,
        description: document.getElementById("typeDes").value, 
      };
    xhr.send(JSON.stringify(params));
    xhr.onload = function(){
        console.log(xhr.response);
        debugger;
    }
}