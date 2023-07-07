const oldname =prompt('Digite o nome da pessoa mais velha: \n')
const oldage = parseFloat(prompt('Digite a idade da pessoa mais velha: \n'))
const newName = prompt('Digite o nome da pessoa mais nova: \n')
const newAge = parseFloat(prompt('Digite a idade da pessoa mais nova: \n'))

const ageDifference = oldage - newAge

alert(`Pessoa mais velha\nnome: ${oldname} \nidade: ${oldage}`)

alert(`Pessoa mais nova\nnome: ${newName} \nidade: ${newAge}`)

alert(`Diferença de idade entre os dois: ${ageDifference}`)