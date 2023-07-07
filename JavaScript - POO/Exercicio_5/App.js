const Loan = require("./inerites/Loan")
const User = require("./inerites/User")

module.exports = class App{
  static #listOfUsers = []


  static getUserByEmail(email){
    return this.#listOfUsers.find(user => user.email === email)
  }

  static newUser(fullName, email){
    const emailExists = App.getUserByEmail(email)
    if(emailExists){
      console.log('Email já utilizado')
    }else{
      const newuser = new User(fullName,email)
      this.#listOfUsers.push(newuser)
      console.log('Cadastrado!')
    }
  }
  static newDeposit(value, email){
    const user = App.getUserByEmail(email)
    if (user){
      user.account.newDeposit(value)
      console.log('Deposito Realizado com Sucesso')
    }
  }

  static newTransfer(value, email, emailDestiny ){
    const fromUser = App.getUserByEmail(email)
    const toUser = App.getUserByEmail(emailDestiny)
    if (fromUser && toUser){
      fromUser.account.newTransfer(fromUser,toUser,value)
    }else{
      console.log('Usuario informado está incorreto')
    }
  }

  static newLoan(value,installment,email){
    const userLoan = App.getUserByEmail(email)
    if (userLoan){
      userLoan.account.newLoan(value,installment)
    }
    
  }

  static newFess(newFees){
    Loan.fees = newFees
  }


  static getUser(email){
    const emailFinded = App.getUserByEmail(email)
    if(emailFinded){
      return emailFinded
    }else{
      console.log('Usuario não Encontrado')
    }
  }
  static get list(){
    return App.#listOfUsers
  }
}

