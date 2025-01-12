class Account {
  #password
  #balance = 555
  constructor(user) {
    this.email = user.email
    this.#password = user.password
  }

  getBalance(email, password) {
    if (this.#authenticate(email,password)){
      return this.#balance
    } else {
      return null
    }
  }
  #authenticate(email,password) {
    return this.email === email && this.#password === password
  }
}


const user= {
  email: "gabriel@gmail.com",
  password: "123456"
}
const myAccount = new Account(user)

console.log(myAccount)
console.log(myAccount.getBalance("gabriel@gmail.com","123456"))
