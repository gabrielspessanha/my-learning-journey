const Deposit = require("./Deposit")
const Installments = require("./Installments")

module.exports = class Loan{
  static #fees = 1.4
  constructor(loanValue,numberInstallments){
    this.loanValue = loanValue
    this.creationDate = Deposit.getCurrentDate()
    this.installments = this.calculteInstallmente(numberInstallments)
  }

  calculteInstallmente(numberInstallments){
    const valueInstall = (this.loanValue / numberInstallments)* Loan.#fees
    const install = []

    for (let i = 0; i< numberInstallments; i++){
      install.push(new Installments(valueInstall,i+1))
    }
    return install
  }

  static get fees(){
    return `Juros: ${Loan.#fees}`
  }

  static set fees(newfees){
    Loan.#fees = newfees 
  }

}
