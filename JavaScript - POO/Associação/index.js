const Adress = require("./Adress");
const Person = require("./Person");

const addr = new Adress("Rua de janeiro",2015, "santaCruz", "Rio de janeiro", "RJ")
const john = new Person("john Doe",addr)

console.log(john)
console.log(john?.adress?.fullAdress())