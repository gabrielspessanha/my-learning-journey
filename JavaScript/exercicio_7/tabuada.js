let valor = parseFloat(prompt("Digite um numero pra tabuada: \n"))
let resultado = "resultado : \n"
for (let i= 1; i<=20; i++){
  //console.log(`${valor} X ${i} = ${valor*i} \n`)
  resultado += ` \n ${valor} X ${i} = ${valor*i}`
}
alert(resultado)