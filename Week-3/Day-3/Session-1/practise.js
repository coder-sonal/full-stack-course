function showMyName(name) {
    name += " Singh";
    return name;
}

function showName(name) {
    return showMyName(name);
}

// showMyName();
var name = showName("Arunabh");
console.log(name);
