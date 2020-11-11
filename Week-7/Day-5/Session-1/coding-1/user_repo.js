var repoUrl = localStorage.getItem("url");
fetch(repoUrl)
.then(response => response.json())
.then(res => {
    if(res.length !== 0){
        var repos = Object.values(res);
        var table = document.createElement("table");
        table.setAttribute("id","userDetails");
        var heading = document.createElement("row");
        heading.setAttribute("style","display:block")
        heading.setAttribute("id","row1");
        var name = document.createElement("th");
        name.innerText = "Repo ID";
        var id = document.createElement("th");
        id.innerText = "Repo Name";
        id.setAttribute("style","width:450px");
        var url = document.createElement("th");
        url.innerText = "Repo Full_Name";
        name.setAttribute("style","width:200px");
        heading.appendChild(name);
        heading.appendChild(id);
        heading.appendChild(url);
        table.appendChild(heading);
        $("#content").append(table);
        for (var key in repos){
            var repoRow = document.createElement("row");
            repoRow.setAttribute("style","display:block");
            var repoId = document.createElement("td");
            repoId.setAttribute("style","width:200px");
            var repoName = document.createElement("td");
            repoName.setAttribute("style","width:500px");
            var repoFullName = document.createElement("td");
            repoFullName.setAttribute("style","width:500px");
            repoId.innerText = repos[key].id
            repoName.innerText = repos[key].name;
            repoFullName.innerText = repos[key].full_name;
            repoRow.appendChild(repoId);
            repoRow.appendChild(repoName);
            repoRow.appendChild(repoFullName);
            table.appendChild(repoRow);
        }
    }
    else {
        var para = document.createElement("p");
        para.classList.add("display-4","text-waring");
        para.innerText = "NO REPOSITORY FOR THIS USER";
        $("#content").append(para)
    }
})