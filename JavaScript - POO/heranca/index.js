class Property {
  constructor(area, price ){
    this.area = area
    this.price = price 
  }

  getPrice(){
    return this.price / this.area
  }
}

class House extends Property {}

class Apartment extends Property {
  constructor(number,area, price){
    super(area,price)
    this.number = number
  }
  getFloor(){
    return this.number.slice(0,-2)
  }
}

const land = new Property(200, 70000)
const someHouse = new House(100, 40000)
const apt = new Apartment("2003", 300, 90000)

console.log("Preço do metro quadrado por área: "  +someHouse.getPrice()+ "R$")
console.log(apt.getPrice()+ "R$")
console.log("Piso do andar: "+ apt.getFloor())