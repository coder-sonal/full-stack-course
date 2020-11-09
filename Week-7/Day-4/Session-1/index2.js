class Car {
    constructor(car_make="invalid", model="invalid", top_speed=0) {
        this.carMake = car_make;
        this.model = model;
        this.topSpeed = top_speed;
        this.dist = 0;
        this.trips = [];
        this.avgSpeed = 0;
    }

    trip(time=1, dist=0) {
        this.dist = this.dist + dist;
        this.speed = dist/time;
        this.trips[0] = this.speed;
    }
    presentStatus() {
        document.getElementById("display").innerHTML=`${this.carMake} ${this.model} ${this.topSpeed}km/hr ${this.dist}km`;

    }
}

$("#submit").click(function(e){
    debugger;
    e.preventDefault();
        let car_make = $("#carCompany").val();
        let model = $("#carModel").val();
        let top_speed = $("#carTopspeed").val();
        let time = $("#time").val();
        let dist = parseInt($("#carDisTravelled").val());

        let car_id = car_make + model;
        if(carHistory[car_id]) {
            carHistory[car_id].topSpeed = top_speed;
            carHistory[car_id].trip(time,dist);
            carHistory[car_id].presentStatus();
        }
        else{
            car_id = new Car(car_make, model, top_speed);
            car_id.carMake = car_make;
            car_id.model = model;
            car_id.topSpeed = top_speed;
            car_id.trip(time,dist);
            car_id.presentStatus();
            carHistory[`${car_make}${model}`] = car_id;
            var cars = document.createElement("option");
            cars.innerHTML = car_id;
            document.getElementById("caradded").appendChild(cars);
        }

})
let carHistory = {};

$("#details").hide();
$("#update").click(function(){
    $("#img").hide();
    $("#details").show();
})
$("#updated").click(function(){
    
})

