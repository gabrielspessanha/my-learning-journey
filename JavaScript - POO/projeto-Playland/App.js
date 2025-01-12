const Database = require("./Database")
const Developer = require("./entities/Developer")
const Game = require("./entities/Game")
const Item = require("./entities/Item")
const Order = require("./entities/Order")
const Program = require("./entities/Program")
const User = require("./entities/User")

class App {
  static #dataBase = new Database()

  createDeveloper(name, country, foundedIn){
    const developer = new Developer(name, country,foundedIn)
    App.#dataBase.saveDeveloper(developer)
  }

  createUser(name, email, password){
    const user = new User(name, email, password)
    App.#dataBase.saveUser(user)
  }

  createProgram(name,description,weight,launch,developer,price){
    const program = new Program(name,description,weight,launch,developer,price)
    App.#dataBase.saveProgram(program)
  }

  createGame(name,genre,description,launch,developer,weight,price,plataform){
    const game = new Game(name,genre,description,launch,developer,weight,price,plataform)
    App.#dataBase.saveGame(game)
  }
  createOrder(items,user){
    const order = new Order(items,user)
    App.#dataBase.saveOrder(order)
  }
  
  // ---------------------- getters ---------------------

  getDevelopers(){
    return App.#dataBase.find('developers')
  }
  getUsers(){
    return App.#dataBase.find('users')
  }
  getPrograms(){
    return App.#dataBase.find('programs')
  }
  getGames(){
    return App.#dataBase.find('games')
  }
  getOrders(){
    return App.#dataBase.find('orders')
  }

  showDataBase(){
    App.#dataBase.showStorage()
  }
}


module.exports = App

