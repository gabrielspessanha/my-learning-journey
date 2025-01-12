class Adress {
  constructor(street, number, neighborhood, city, state){
    this.street = street
    this.number= number
    this.neighborhood = neighborhood
    this.city = city
    this.state = state
  }

  fullAdress(){
    return `Rua ${this.street}, N° ${this.number}. ${this.neighborhood},  ${this.city}/${this.state}.`
  }
}
module.exports = Adress