function showMenu(){
  return parseFloat(prompt("Escolha uma opção: \n"+
  "\n1-Parsec (pc)"+
  "\n2-Unidade astronomica (AU)"+
  "\n3-Quilômetros (km)"))
}

function showMenu2(choice,distanceChoiced){
  alert(`Distancia em anos luz: ${distanceLightYears}`+
     `\nConversão desejada: ${choice}`+
     `\nDistancia convertida: ${distanceChoiced}`)
}

let choice
const distanceLightYears = parseFloat(prompt("Digite a distancia em anos luz"))
const option= showMenu()

switch(option){
  case 1 :
     choice = "Parsec"
     const distanceInPc = distanceLightYears * 0.306601
    showMenu2(choice,distanceInPc)
    break
  case 2: 
     choice = "Unidade Astronomica"
     const distanceInAu= distanceLightYears * 63241.1
     showMenu2(choice,distanceInAu)
    break
  case 3:
     choice = "Quilometros"
     const distanceInKm = distanceLightYears * (9.5 * Math.pow(10,12))
     showMenu2(choice,distanceInKm)
    break
  default:
    alert(`Distancia em anos luz: ${distanceLightYears}`+
     `\nUnidade não identificada: Conversão fora do espaço`)
}