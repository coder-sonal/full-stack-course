var submit = document.getElementById("version");
submit.addEventListener("click" , printVersion);

var os = "";

function setValue() {
    os = document.getElementById("mySelect").value;
}

function printVersion(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://localhost:8080/codenames/"+os)
    xhr.send();
    xhr.onload = function(){
       var details = xhr.response;
       var codenames = JSON.parse(details).codenames;

       debugger;

       var parent = document.getElementById('result');
       var table = document.createElement('table');
       var headingrow = document.createElement('tr');
       var col1 = document.createElement('td');
       col1.innerHTML = "Versions";
       var col2 = document.createElement('td');
       col2.innerHTML = "Names";
       var col3 = document.createElement('td');
       col3.innerHTML = "Operating System";
       headingrow.appendChild(col1);
       headingrow.appendChild(col2);
       headingrow.appendChild(col3)
       table.appendChild(headingrow);
       parent.appendChild(table);   


       codenames.forEach(element => {
        var heading = document.createElement('tr');
        var colVersion = document.createElement('td');
        colVersion.innerHTML = element.version;
        var colName = document.createElement('td');
        colName.innerHTML = element.name;
        var colOs = document.createElement('td');
        colOs.innerHTML = os;
        heading.appendChild(colVersion);
        heading.appendChild(colName);
        heading.appendChild(colOs)
        table.appendChild(heading);
        parent.appendChild(table);   
       });
    }
}