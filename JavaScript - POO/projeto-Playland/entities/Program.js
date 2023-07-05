const Product = require("./Product");

class Program extends Product{
  constructor(name, description, weight, launch, developer, price){
    super(name,description,price,weight, launch,developer)
  }
}



module.exports = Program