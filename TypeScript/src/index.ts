/*function sendSpaceShip(name: string, captain: string){
  const spaceship ={
    name,
    captain,
    speed: 20,
    inMission: true,
    crew: []
  }

  alert(`A nave ${spaceship.name} comandada pela capitão ${spaceship.captain} foi enviada em uma missão`)

  return spaceship
}


function accelarete(targetSpeed: number, spaceship: { name: string, speed: number}){
  if(spaceship.speed > targetSpeed){
    alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`)
  }else if (spaceship.speed < targetSpeed){
    alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}...`)
  }else{
    alert(`Mantendo a velocidade da ${spaceship.name} para ${targetSpeed}...`)
  }
}

const spaceshipName = prompt('Insira o nome da nave.')
const spaceshipCaption = prompt('Insira o nome do capitão da nave.')


const currentShip = sendSpaceShip(spaceshipName, spaceshipCaption)

const speed = Number(prompt('Insira a velocidade para a qual deseja acelerar '))

accelarete(speed, currentShip)

*/