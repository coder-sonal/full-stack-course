var logTime = document.getElementById("loginTime");
var outTime = document.getElementById("logOutTime");

var timeIn = new Date();
logTime.innerHTML ="Login Time"+" "+ timeIn.getHours()+":"+timeIn.getMinutes()+":"+timeIn.getSeconds()
document.getElementById("name").innerHTML = localStorage.getItem("userId");

var timeOut = document.getElementById("logOutTime");
setTimeout(function(){window.close()},30000)
