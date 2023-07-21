class SpaceShip{
  constructor(name, type, maximumSpeed){
    this.name = name
    this.type = type
    this.maximumSpeed = maximumSpeed
    this.speed = 0
  }

  speedUp(value){
    if(this.speed >this.maximumSpeed ){
      alert("Velocidade Máxima Ultrapassada!!")
    }
    return this.speed += value
    
  }

}

const nameShip = prompt("Nome da espaçonave: ")
const typeShip = prompt("Tipo da espaçonave: ")
const maximumSpeedShip = parseFloat(prompt("Velocidade maxima da nave: "))
const ship = new SpaceShip(nameShip,typeShip,maximumSpeedShip)

while(true){
  const choice = prompt("1-Acelerar\n2-Parar")
  if(choice === "1"){
    ship.speedUp(parseFloat(prompt("Informe quanto deseja acelerar: ")))
  }else if(choice === "2"){
    alert(`Nave: ${ship.name}\nTipo: ${ship.type}\nVelocidade que estava: ${ship.speed}Km/s`)
    ship.speed = 0
    break
  }else{
    alert("Opção não existe")
  }
}