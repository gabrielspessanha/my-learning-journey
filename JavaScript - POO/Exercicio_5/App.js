const Loan = require("./inerites/Loan")
const User = require("./inerites/User")

class App{
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
    const userDeposit = App.getUserByEmail(email)
    userDeposit.account.newDeposit(value)
    console.log('Deposito Realizado com Sucesso')
  }
  static newTransfer(value, email, emailDestiny ){
    const userTransferSent = App.getUserByEmail(email)
    const userTransferReceived = App.getUserByEmail(emailDestiny)
    userTransferSent.account.newTransfer(userTransferSent,userTransferReceived,value)
  }

  static newLoan(value,installment,email){
    const userLoan = App.getUserByEmail(email)
    userLoan.account.newLoan(value,installment)
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

App.newUser('gabriel','gabriel@gmail.com')
App.newUser('gabrielle','gabrielle@gmail.com')
App.newDeposit(500,'gabriel@gmail.com')
App.newTransfer(300,'gabriel@gmail.com','gabrielle@gmail.com')
App.newFess(2.5)

const useDefault = App.getUser('gabriel@gmail.com')
console.log(useDefault.account.balance)
