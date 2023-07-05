const Product = require("./Product");

class Game extends Product{
  constructor(name, genre, description, launch, developer, weight, price, plataform){
    super(name, description, price, weight, launch,developer)
    this.genre = genre
    this.plataform = plataform
  }
  
}

module.exports = Game