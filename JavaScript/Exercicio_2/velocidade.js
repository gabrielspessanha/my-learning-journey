
let car1name = prompt("escreva o nome do 1° carro: ")
let car1vel = parseFloat(prompt(`escreva a velocidade do ${car1name}:`))

let car2name = prompt("escreva o nome do 2° carro: ")
let car2vel = parseFloat(prompt(`escreva a velocidade do ${car2name}:`))

if (car1vel == car2vel){
  console.log(`ambos possuem velocidades iguais de ${car1vel}km`)
}else if(car1vel > car2vel){
  console.log(`O ${car1name} é mais rapido que o ${car2name} `)
}else if (car2vel > car1vel){
  console.log(`O ${car2name} é mais rapido que o ${car1name} `)
}