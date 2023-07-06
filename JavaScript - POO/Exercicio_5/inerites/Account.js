const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")

module.exports = class Account {
  #balance = 0
  constructor(){
    this.allDeposits = []
    this.allLoans = []
    this.allTransfers = []
    this.incomingTransfers = []
  }
  get balance(){
    return this.#balance
  }

  newDeposit(value){
    const newdeposit = new Deposit(value)
    this.#balance += newdeposit.value
    this.allDeposits.push(newdeposit)
  }
  newLoan(value,installments){
    const newloan = new Loan(value,installments)
    this.#balance += value
    this.allLoans.push(newloan)
  
  }
  newTransfer(userSent,userReceived,value){
    
    if (userSent.account === this){
      if(this.#balance >= value){
        const transfer = new Transfer(userSent,userReceived,value)
        this.#balance -= value
        userReceived.account.newDeposit(value)
        this.allTransfers.push(transfer)
        console.log("Transferência realizada com sucesso!")
      }else{
        console.log('Sem saldo')
      }
    }else if(userReceived.account){
      const transfer = new Transfer(userSent,userReceived,value)
      this.#balance += value
      this.allTransfers.push(transfer)
      console.log("Transferência recebida com sucesso!");
    }else{
      console.log('Usuario Não existe')
    }
  }
}