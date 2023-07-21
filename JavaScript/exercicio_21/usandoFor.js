let shipName = prompt("Nome da Nave: ")
const choiceCaracter = prompt("Qual o caractere você deseja substituir de "+ shipName+" ?")
const putCaracter = prompt("qual caracter deseja colocar? ")
let newName = ""

for (let i in shipName){
  if(shipName[i] === choiceCaracter){
    newName+=putCaracter
  }else{
    newName+=shipName[i]
  }

}
alert("Novo nome da nave: "+ newName)