interface SpaceShipType{
  name: string,
  pilot: string,
  crewlimit: number,
  crew: string[],
  inMission: boolean
}

const spaceships = []

function createSpaceShip(event){
  event.preventDefault()
  const nameShip = document.querySelector('#nameship').value
  const pilotShipName = document.querySelector('#pilotShipName').value
  const crewship = +document.querySelector('#crewship').value

  const spaceship = createShip(nameShip,pilotShipName, crewship)
  spaceships.push(spaceship)
  creatListSpaceShips(spaceship)
 alert(`A nave ${spaceship.name} foi adicionada!`)
}

function creatListSpaceShips(spaceship: SpaceShipType){
  const ul = document.createElement('ul')
  const li = document.createElement('li')
  const btnSendMember = document.createElement('button')
  btnSendMember.innerText = 'Adicionar piloto'
  btnSendMember.className = 'addmember'
  btnSendMember.onclick = addmember
  btnSendMember.value = spaceship.name

  const button = document.createElement('button')
  button.innerText = 'Enviar em missão'
  button.className = 'sendToMision'
  button.onclick = sendShiptToMission
  button.value = spaceship.name

  li.innerText = `Nave: ${spaceship.name} | Capitão: ${spaceship.pilot} | Tamanho da equipe: ${spaceship.crewlimit} | Equipe: ${spaceship.crew} | Em missão: ${spaceship.inMission? "Sim": "Não"} `
  li.append(button, btnSendMember)
  ul.appendChild(li)
  document.querySelector('#ships').appendChild(ul)
}

function createShip(name: string, pilot: string, crewlimit: number){
  const spaceship ={
    name,
    pilot,
    crewlimit,
    crew: [],
    inMission: false
  }

  return spaceship
}


function addmember(event){
  const vl = event.target.value 
  const spaceshipIndex = spaceships.findIndex( space=> space.name  === vl)
  const newMember = prompt('Nome do novo membro da tripulação')
  const spaceship = spaceships[spaceshipIndex];

  sendPilotTocrew(newMember, spaceship)
}

function sendPilotTocrew(member: string, spaceship: SpaceShipType){
  if (spaceship.crew.length >= spaceship.crewlimit){
    alert(`${member} não pode ser adicionado. Limite atingido. `)
  }else{
    spaceship.crew.push(member)
    alert(`${member} foi adicionado à tripulação da ${spaceship.name} `)
  }
}

function sendShiptToMission(event){
  const vl = event.target.value 
  const spaceshipIndex = spaceships.findIndex( space=> space.name  === vl)

  if(spaceshipIndex !== -1){
    const spaceship = spaceships[spaceshipIndex];
    if( !(spaceship.inMission) && spaceship.crew.length > 0){
      spaceship.inMission = true
      alert("nave enviada em missão!")
    }else if(spaceship.crew.length === 0){
      alert("Nave não pode partir sozinha")
    }else{
      alert("Nave não pode partir")
    }
  }else{
    alert("nave não encontrada")
  }
}

function showSpaceships(){
  spaceships.forEach( ship => console.log(ship))
}

document.querySelector('#btnSubmit').addEventListener('click', createSpaceShip)
