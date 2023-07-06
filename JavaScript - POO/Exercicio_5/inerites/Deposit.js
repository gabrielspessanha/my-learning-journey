module.exports = class Deposit {
  constructor(value){
    this.value = value
    this.creationDate = Deposit.getCurrentDate()
  }

  static getCurrentDate(){
    const currentDate = new Date()
    const day = currentDate.getDate()
    const month = currentDate.getMonth()+1
    const year = currentDate.getFullYear()


    return `Data: ${day}/${month}/${year}`
  }
}