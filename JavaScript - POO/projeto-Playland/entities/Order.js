
class Order {
  #total
  #items
  #user

  constructor(items, user){
    this.#items = items
    this.#user = user
    this.#total = items.reduce((sum, {product,quantity})=>{
      return sum + (product.price * quantity)},0)
  }

  get data(){
    return {
      items: this.#items,
      user: this.#user,
      total: this.#total
    }
  }
}


module.exports = Order