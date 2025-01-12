alert('Bem-vindo! A seguir pediremos que informe alguns dados')
const name = prompt('Digite seu nome: \n')
const age = parseFloat(prompt('Digite sua idade: \n'))
const ageConfirm = parseFloat(prompt('Confime sua idade: \n'))

alert(`Seu nome: ${name}\n
  Sua idade: ${age}\n
  A confirmação da idade: ${ageConfirm === age? 'confirmado': 'confirmação errada'}`)