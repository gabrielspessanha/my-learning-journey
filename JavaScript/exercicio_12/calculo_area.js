let escolha = ""
let resultado = 0
let base = 0
let altura = 0

function multiplicar(x=0,y=0){
  let resultado = (x*y)/2
  return resultado
}
function aoquadrado (x){
  let resultado = x*x
  return resultado 
}
function pi_raio (x,y){
  let resultado = x*(y*y)
  return resultado
}
do {
escolha = prompt("Calculadora Geométrica\n " +

"Escolha uma das opções: \n" +
"1) Área do triãngulo \n" +
"2) Área do retângulo \n" +
"3) Área do quadrado\n" +
"4) Área do trapézio \n" +
"5) Área do circulo \n" +
"6) Sair ")
switch (escolha){
  case "1":
     base = parseFloat(prompt("digite a base : "))
     altura = parseFloat(prompt("digite a altura: "))
    alert(`Á area do triangulo é: ${multiplicar(base,altura)}` )
    
    break
  case "2":
     base = parseFloat(prompt("digite a base : "))
     altura = parseFloat(prompt("digite a altura: "))
    alert(`Á area do retângulo é: ${multiplicar(base,altura)*2}` )
    break
  case "3":
    lado = parseFloat(prompt("digite o lado : "))
    alert(`Á area do quadrado é: ${aoquadrado(lado)}` )
    break
  case "4":
    base = parseFloat(prompt("digite a base maior : "))
    let base_menor = parseFloat(prompt("digite a basea menor: "))
    altura = parseFloat(prompt("digite a altura: "))
    alert(`Á area do trapézio é: ${multiplicar(base + base_menor,altura)}` )
    break
  case "5":
    let raio = parseFloat(prompt("digite o tamanho do raio: "))
    let pi = 3.14
    alert(`Á area do circulo é: ${pi_raio(pi,raio)}` )
    break
  case "6":
    alert('encerrando...')
    break
  default:
    alert("erroo!!! opção invalida")
}
} while (escolha !== "6")