const App = require('./App')

App.newUser('gabriel pessanha','gabriel@gmail.com')
App.newUser('gabrielle gomes','gabrielle@gmail.com')
App.newUser('isaac Pontes','isaac@gmail.com')

App.newDeposit(100,'gabriel@gmail.com')
App.newTransfer(23,'gabriel@gmail.com','gabrielle@gmail.com')

App.newFess(10)

App.newLoan(200,7,'isaac@gmail.com')

console.log(App.getUser('gabriel@gmail.com'))
console.log(App.getUser('gabriel@gmail.com').account)
console.log(App.getUser('gabrielle@gmail.com').account)
console.log(App.getUser('isaac@gmail.com').account.allLoans[0])