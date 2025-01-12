class Database {
  #storage = {
    developers: [],
    games: [],
    programs: [],
    orders: [],
    users: [],
  }

  find(key){
    return this.#storage[key]
  }

  saveDeveloper(developer){
    this.#storage.developers.push(developer)
  }
  findGameByname(gameName){
    this.#storage.games.find(g => g.name === gameName)
  }

  saveGame(game){
    const gameExists = this.findGameByname(game.name)
    if(!gameExists){
      this.#storage.games.push(game)
    }
  }

  findProgramByName(programName){
    this.#storage.programs.find(p => p.name === programName)
  }

  saveProgram(program){
    const programExists = this.findProgramByName(program)
    if (!programExists){
      this.#storage.programs.push(program)
    }
  }

  saveOrder(order){
    this.#storage.orders.push(order)
  }

  saveUser(user){
    const userExists = this.#storage.users.find(u => u.email === user.email)
    if (!userExists){
      this.#storage.users.push(user)
    }
  }
  showStorage(){
    console.table(this.#storage.developers)
    console.table(this.#storage.games)
    console.table(this.#storage.programs)
    console.table(this.#storage.users)
    console.table(this.#storage.orders.map(order => order.data))
  }


}

module.exports = Database