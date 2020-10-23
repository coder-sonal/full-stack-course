$("#click").click(function(){
    var os = $("#os").val();
    $.ajax({url:"http://localhost:8080/codenames/"+ os, type: "GET"}).done(function(data){
        var response = JSON.parse(data)
        var elem = (Object.values(response))
        var versions = elem[0];
        for (var i = 0;  i < versions.length; i++){
            var v1 = versions[i];
            console.log(v1)
            var row = document.createElement("tr")
            var v3 = document.createElement("td");
            v3.innerText = v1.version;
            var v4 = document.createElement("td");
            v4.innerText = v1.name;
            row.appendChild(v3);
            row.appendChild(v4);
            $("#versionDetails").append(row)
            $("#versionDetails").append(row)
        }    
    })
})
$("#os").click(function(){
})