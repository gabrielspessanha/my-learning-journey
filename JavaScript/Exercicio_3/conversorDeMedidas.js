const valor = parseFloat(prompt('digite um valor em metros: '))
const escolha = prompt('\n escolha pra qual medida quer converter:\n\n A)milimetro(mm) \n B) centimetro(cm) \n C)decímetro(dm) \n D)decâmetro(dam) \n E)hectômetro(hm) \n F)quilômetro(km)').toUpperCase()
let resultado = 0
let tipo=""
switch (escolha){
  case "A":
    tipo="mm"
    resultado = valor*1000
    break
  case "B":
    tipo="cm"
    resultado = valor*100
    break
  case "C":
    tipo="dm"
    resultado = valor*10
    break
  case "D":
    tipo="dam"
    resultado = valor/10
    break
  case "E":
    tipo="hm"
    resultado = valor/100
    break
  case "F":
    tipo="km"
    resultado = valor/1000
    break
  default:
    alert('Opção Invalida')
    break
}

alert(`o resultado foi ${resultado}/${tipo}`)