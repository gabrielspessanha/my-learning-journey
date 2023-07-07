const Deposit = require("./Deposit")
const Installments = require("./Installments")

module.exports = class Loan{
  static #fees = 1.05
  constructor(loanValue,numberInstallments){
    this.loanValue = loanValue
    this.creationDate = Deposit.getCurrentDate()
    this.installments = this.calculteInstallmente(numberInstallments)
  }

  calculteInstallmente(numberInstallments){
    const valueInstall = (this.loanValue * Loan.#fees)/numberInstallments
    const install = []

    for (let i = 1; i<= numberInstallments; i++){
      install.push(new Installments(valueInstall,i))
    }
    return install
  }

  static get fees(){
    return `Juros: ${Loan.#fees}`
  }

  static set fees(newfees){
    Loan.#fees = 1 + (newfees / 100)
  }

}
