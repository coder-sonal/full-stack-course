
function login(ev){
    ev.preventDefault();
    debugger
    var name = document.getElementById("userName").value;
    var password = document.getElementById("exampleInputPassword1").value;
    var names = [];
    var times = [];

    if(localStorage.getItem('userID') && localStorage.getItem('loginTime')) {
        names = JSON.parse(localStorage.getItem('userID'));
        times = JSON.parse(localStorage.getItem('loginTime'));
    }
    names.push(document.getElementById("userName").value);
    times.push(new Date());

    localStorage.setItem("userID", JSON.stringify(names))
    localStorage.setItem("loginTime" , JSON.stringify(times));

    if (name === "Sonal" && password === "1"){
        window.location.pathname = "August2020/Week-5/Day-3/coding-1/dash.html";
    }else if(name === "Arunabh" && password === "2"){
        window.location.pathname = "August2020/Week-5/Day-3/coding-1/dash.html";
    }else{
        alert("Enter Valid UserName And Password")
    }
}

