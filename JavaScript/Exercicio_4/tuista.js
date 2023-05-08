const nome = prompt("Qual o seu nome?: ")
let resp = prompt("ja visitou alguma cidade?[sim/nao]")
let cidade = []
while (resp === "sim"){
  cidade.push(prompt("qual o nome da cidade?"))
  resp = prompt("ja visitou alguma outra cidade? [sim/nao]")
}
alert(`${nome}: Visitou ${cidade.length} cidades e foram elas ${cidade}`)