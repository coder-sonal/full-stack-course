class Car{
    constructor(horsePower, name){
      this.horsePower = horsePower;
      this.fuel = 100;
      this.name = name;
    }
  
    consumeFuel(amount){
      this.fuel -= amount;
    }
  }
  
  class Sedan extends Car{
    constructor(horsePower, name, numSeats){
      super(horsePower, name);
      this.numSeats = numSeats;
    }
    printName(){
      console.log(this.name);
    }
  
    updateHorsePower(input){
      super.horsePower = input;
    }
  }
  
  let mySedan = new Sedan(150, 'Civic', 4);
  
  mySedan.updateHorsePower(300);
  console.log(mySedan.numSeats ,mySedan.name,mySedan.horsePower);
  mySedan.printName();
