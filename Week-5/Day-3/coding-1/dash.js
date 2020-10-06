var logTime = document.getElementById("loginTime");
var outTime = document.getElementById("logOutTime");

var timeIn = new Date();
logTime.innerHTML ="Login Time"+" "+ timeIn.getHours()+":"+timeIn.getMinutes()+":"+timeIn.getSeconds()
document.getElementById("name").innerHTML = localStorage.getItem("userId");

var timeOut = document.getElementById("logOutTime");
var count = 300;
function timeout(){
    count--;
    timeOut.innerHTML="Session Will Expire in"+" "+count + " seconds";
    if(count === 0) {
        clearInterval(timer);
        window.history.back();
    }
}
var timer = setInterval(timeout, 1000);

