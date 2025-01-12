class Wallet {
  #amount
  #username
  constructor(){
    this.#amount = 100.99 * 100
  }


  get amount(){
    return this.#amount / 100
  }

  set username(newUserName){
    if (typeof newUserName === 'string'){
      this.#username = newUserName
    }else{
      console.log('Username must be of type string')
    }
  }

  get username(){
    return this.#username
  }

}
const myWallet = new Wallet()
console.log(myWallet.amount)
myWallet.username = 'gabriel'


console.log(myWallet.username)

myWallet.username = 2133
console.log(myWallet.username)