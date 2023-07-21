function shipChoice(choice,ship){
  switch(choice){
    case "1":
      increaseSpeed(ship)
      alert("acelerando...")
      
      break
    case "2": 
      slowDown(ship)
      break
    case "3":
      shipOptions(ship)
      break
    default: 
      alert("opção não existe")
      break
  }
}

function increaseSpeed(ship){
  ship.speed += 5
}

function slowDown(ship){
  if(ship.speed > 0){
    ship.speed -= 5
    alert("desacelerando...")
    if(ship.speed < 0){
      ship.speed = 0
    }
  }else{
    alert("não existe velocidade negativa!")
  }
}

function shipOptions(ship){
  alert(`Espaçonave: ${ship.shipName} \nVelocidade: ${ship.speed}Km/s`)
}

function menuShip(){
  return prompt("1- Acelerar Nave em 5Km/s\n"+
  "2- Desacelerar Nave em 5Km/s\n"+
  "3- Imprimir dados de bordo\n"+
  "Digite 'sair' para sair do prorgrama")
}

const shipName = prompt("Digite nome da espaçonave: ")

let ship = {
  shipName: shipName,
  speed: 0
}

let choice =""

while(true){
  choice = menuShip()
  if (choice === "sair"){
    alert("saindo...")
    break
  }else{
    shipChoice(choice,ship)
  }
}

