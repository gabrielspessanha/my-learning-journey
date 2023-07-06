const Deposit = require("./Deposit")

class Transfer{
  constructor(userSent,userReceived,value){
    this.userSent = userSent
    this.userReceived = userReceived
    this.value = value
    this.creationDate = Deposit.getCurrentDate()
  }
}
module.exports = Transfer