$("#search").click(function(){
    var user = document.getElementById("user").value;
    fetch("https://api.github.com/search/users?q="+user)
    .then(response => response.json())
    .then(res => {
        var data = (Object.values(res)[2])
        var table = document.createElement("table");
        table.setAttribute("id","userDetails");
        var heading = document.createElement("row");
        heading.setAttribute("id","row1");
        var name = document.createElement("th");
        name.innerText = "User Name";
        name.setAttribute("style","width:200px");
        var id = document.createElement("th");
        id.innerText = "User Id";
        id.setAttribute("style","width:200px");
        var url = document.createElement("th");
        url.innerText = "User Url";
        name.setAttribute("style","width:200px");
        heading.appendChild(name);
        heading.appendChild(id);
        heading.appendChild(url);
        table.appendChild(heading);
        $("#content").append(table);
        for(var key in data){
            var loginName = document.createElement("row");
            loginName.setAttribute("style","display:block")
            var value = document.createElement("td");
            value.setAttribute("style","width:200px");
            var userId = document.createElement("td");
            userId.setAttribute("style","width:200px");
            var userUrl = document.createElement("td");
            userUrl.setAttribute("style","width:500px");
            var repo = document.createElement("p");
            repo.innerText="Show Repo";
            repo.setAttribute("style","color:yellow");
            repo.setAttribute("onclick",`showUserRepo("${data[key].repos_url}")`)
            userId.innerText = data[key].id;
            userUrl.innerText = data[key].url
            value.innerText = data[key].login;
            loginName.appendChild(value);
            loginName.appendChild(userId);
            loginName.appendChild(userUrl);
            loginName.appendChild(repo);
            table.appendChild(loginName);
        }
    })
    .catch(err => console.log(err));
})
  showUserRepo = (a) => {
    localStorage.setItem("url",a)
    window.location.pathname = "/August2020/Week-7/Day-5/Session-1/coding-1/user_repo.html"
  }

