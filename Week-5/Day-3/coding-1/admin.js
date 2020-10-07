var users = document.createElement("option");
var name = localStorage.getItem("userId");
var uName = document.createTextNode(name);
users.appendChild(uName);
document.getElementById("userLoggedIn").appendChild(users);
var time = document.createElement("tr")
var data = localStorage.getItem("loginTime");
var T = document.createTextNode(data);
time.appendChild(T);
document.getElementById("login").appendChild(time);