var i = 0;
function add(e){
    e.preventDefault();
    var table = document.getElementById("records");
    var row = table.insertRow(i+1);
    var col1 = row.insertCell(0);
    var col2 = row.insertCell(1);
    var col3 = row.insertCell(2);
    col1.innerHTML = document.getElementById("prod").value;
    col2.innerHTML = document.getElementById("price").value;
    col3.innerHTML = document.getElementById("qty").value;
    i++;
    // table.style.color = document.getElementById("color").value;
}
var form1 = document.getElementById("add");
form1.addEventListener("submit" , add);

function change(e){
    e.preventDefault();
    var table = document.getElementById("records");
    table.style.color = document.getElementById("color").value;
    table.style.fontSize = document.getElementById("size").value + "px";
    var row = document.querySelectorAll("tr")
    for (var i = 0; i < row.length; i++){
        if(i % 2 === 0){
            row[i].style.backgroundColor = document.getElementById("bgColor").value;
        }
    }
}
var form2 = document.getElementById("settings");
form2.addEventListener("submit" , change)