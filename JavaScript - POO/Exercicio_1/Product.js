class Product {
  constructor(nameProduct,descripton,price){
    this.nameProduct= nameProduct
    this.descripton = descripton
    this.price = price
    this.inStock = 0

  }

  addToStock(amount){
    this.inStock += amount
  }
  calculeDiscount(discount){
    const decimal = discount/100
    discount = this.price * decimal
    return this.price = this.price - discount
  }
}

const shirt = new Product('CamisaOverSize','camisa lisa over-size elastica na cor preta', 70.00)

shirt.addToStock(20)
shirt.calculeDiscount(12)
console.log(shirt)