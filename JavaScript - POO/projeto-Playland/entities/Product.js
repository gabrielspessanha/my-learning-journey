class Product{
  constructor(name, description, price, weight, launch, developer){
    this.name = name
    this.description = description
    this.price = price 
    this.weight = weight
    this.launch = launch
    this.developer = developer
  }

  addToStock(quantity){
    this.inStock += quantity
  }

  removeToStock(quantity){
    this.inStock -= quantity
  }
}


module.exports = Product