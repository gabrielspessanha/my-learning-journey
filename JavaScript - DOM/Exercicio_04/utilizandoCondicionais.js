const name = prompt('Digite seu nome: \n')
let speed = 0

const question = parseFloat(prompt('Digite a velocidade que gostaria de acelerar a nave: \n'))

const confir = confirm (`Você estará indo pra velocidade ${speed + question}Km/s`)
if (confir === true){
  speed += question
  if (speed <= 0){
    alert('Nova velocidade está parada. Considere partir e aumentar a velocidade')
  }else if(speed < 40){
    alert('Você está devagar, podemos aumentar mais')
  }else if(speed >= 40 && speed < 80){
    alert('Parece uma boa velocidade para manter')
  }else if(speed >= 80 && speed <100){
    alert('Velocidade alta, Considere diminuir.')
  }else if(speed >= 100){
    alert('Velocidade perigosa Controle automatico forçado.')
  }
  alert(`Piloto ${name } sua velocidade: é de ${speed}Km/s`)
}else{
  alert('Aceleração Cancelada!!')
}