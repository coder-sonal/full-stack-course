var state_cities = [{"state": "Karnataka", "cities": ["Bangalore", "Mysore"]}, {"state": "Tamil Nadu", "cities": ["Chennai", "Tanjore"]}] 

for(var i = 0; i < state_cities.length; i++){
    var data = document.createElement("option");
    data.text = state_cities[i].state;
    $("#state").append(data);
   
}

var state;

$("#state").click(function(){
    state = document.getElementById("state").value;
})


$("#next").click(function(){
    var cities = [];
    state_cities.forEach(data => {
        if(data["state"] === state) {
            cities = data["cities"];
        }
    })
    for(var i = 0; i < cities.length; i++){
        var elem = document.createElement("option");
        elem.text = cities[i];
        $("#city").append(elem);
    }
})


