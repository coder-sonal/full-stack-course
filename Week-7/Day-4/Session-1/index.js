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
    printName(){
      console.log(this.name)
    }
  }
  
  let mySedan = new Sedan(150, 'Civic');
  mySedan.consumeFuel(20);
  console.log(mySedan.fuel);
  mySedan.printName();
  console.log(mySedan.horsePower);