const atacante = prompt('nome do personagem: ')
const atacantePoder = parseFloat(prompt('poder de ataque: '))

const defensor = prompt('nome do 2° personagem: ')
let vidaDefensor = parseFloat(prompt('pontos de vida: '))
const persona2Defesa = parseFloat(prompt("poder de defesa: "))
let persona2Escudo = prompt("possui escudo? [sim/nao]")

let dano = 0

if (atacantePoder > persona2Defesa && persona2Escudo === "nao"){
  dano = (atacantePoder - persona2Defesa)

}else if (atacantePoder > persona2Defesa && persona2Escudo === "sim"){
  dano = (atacantePoder - persona2Defesa)/2
}

vidaDefensor -= dano
 alert(`${atacante} casou ${dano} pontos de dano em ${defensor}`)
 
 alert(`
  ${atacante} \n poder de ataque: ${atacantePoder} \n\n
  ${defensor} \n pontos de vida: ${ vidaDefensor}
  \nPoder de defesa: ${persona2Defesa} \n possui escudo: ${persona2Escudo}`
 )