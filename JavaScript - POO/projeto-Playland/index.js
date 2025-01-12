const App = require("./App")

const mainApp = new App()
mainApp.createDeveloper('Rockstar Games','EUA','1964')
mainApp.createDeveloper('jhon','Canáda','2003')

const rockstar = mainApp.getDevelopers()

mainApp.createUser('gabriel','gabriel@teste.com',1235512)
mainApp.createGame('GTA V','RTS/AÇÂO/AVENTURA','jogo mundo aberto', '07/07/2013', rockstar[0],'105gb',43.00,'PC/PS3/PS4/PS5/XBOX')
mainApp.createProgram('VsCode','programa de desenvolver algoritmos','10gb','01/01/2010','Facebook',10.00)

const games = mainApp.getGames()
const users = mainApp.getUsers()
const programs = mainApp.getPrograms()

const items = [
  {
    product: games[0],
    quantity: 2
  },
  {
    product: programs[0],
    quantity: 8
  }

]
mainApp.createOrder(items,users[0])

mainApp.showDataBase()