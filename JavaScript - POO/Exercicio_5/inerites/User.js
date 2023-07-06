const Account = require("./Account")

class User{
  constructor(fullName, email){
    this.fullName = fullName
    this.email = email
    this.account = new Account()
    
  }
}

module.exports = User