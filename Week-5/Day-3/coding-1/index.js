function login(ev){
    ev.preventDefault();
    var name = document.getElementById("userName").value;
    var password = document.getElementById("exampleInputPassword1").value;
    if (name === "Sonal" && password === "1"){
        localStorage.setItem("userId", name);
        window.location.pathname = "August2020/Week-5/Day-3/coding-1/dash.html";
    }else{
        alert("Enter Valid UserName And Password")
    }
}

