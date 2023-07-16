let dobras = 0
const naveName = prompt("Digite o nome da nave: ")
let choice = window.confirm("Deseja entrar em dobra espacial?\n")


while(choice){
  choice = window.confirm("Deseja realizar a proxima dobra?\n")
  dobras++
}

alert(`Nome da nave: ${naveName}\nNúmero de dobras espaciais: ${dobras}`)