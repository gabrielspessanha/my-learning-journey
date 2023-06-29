class User{
  constructor(fullname,email,password){
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email,password){
    if (this.email === email && this.password === password){
      console.log("login realizado com sucesso")
    }else{
      console.log("falha ao realizar login")
    }
  }
}

const newUser = new User('Gabriel Santos Pessanha','gabriel@gmail.com','12345678')

newUser.login('gabriel@gmail.com','12345678')
console.log(newUser)