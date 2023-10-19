type Situation = "habitado" | "habitavel" | "inabitavel" | "inexplorado"

type planetType = {
  name: string, 
  coordinates: number[], 
  situation: Situation, 
  satellites: string[]| void
}

const planets = []

function SaveNewPlanet(){
  const name = prompt("Digite o nome do planeta")
  const coordinates: number[] = []

  for (let i = 0; i< 4; i++){
    const position = Number(prompt(`Digite a ${i + 1}° posição`))
    coordinates.push(position)
  }
  const situation = addSituationPlanet()
  const satellites = confirm("Possui satelites?")? addSatellites(name) : [""]

  const planet:planetType ={
    name,
    coordinates,
    situation,
    satellites
  }

  planets.push(planet)
}
function addSituationPlanet(){
    const situat= prompt("Digite a atual situação do planeta" +
    "\nhabitado\nhabitavel\ninabitavel\ninexplorado")
    
    if (situat !== "habitado" && situat !== "habitavel" && situat !== "inabitavel" && situat !== "inexplorado") {
      alert("Situação inválida");
      return
    }

    return situat
  
}

function addSatellites(name: string ){
  
  const planetIndex = planets.findIndex((planet: planetType) => planet.name === name)
  const numberSatellites = Number(prompt("Quantos satelites?"))
  const satelites = []

  for (let i= 0; i< numberSatellites; i++){
    const satellite = prompt(`Nome do ${i + 1}° Satelite`)
    satelites.push(satellite)
  }

  if(planetIndex === -1){
    return satelites
  }else{
    planets[planetIndex].satellites = [...satelites]
  }

}
function updateSituationPlanet(name: string){
  const planetIndex = planets.findIndex((planet: planetType) => planet.name === name)
  const situation = prompt(`Qual a situação do planeta ${planets[planetIndex].name} ?`+
  "\nhabitado\nhabitavel\ninabitavel\ninexplorado")

  planets[planetIndex].name = situation
}

function showAllPlanets(){
  planets.forEach( (planet) =>{
    console.table(planet)
  })
  return
}

function deleteSatellite(name: string) {
  const planetIndex: number = planets.findIndex((planet: planetType) => planet.name === name);

  if (planetIndex === -1) {
    alert("Planeta não encontrado");
    return;
  }

  const satelliteForDelete = prompt("Digite o nome do satélite que deseja excluir");

  const satelliteIndex: number = planets[planetIndex].satellites.findIndex(e => e === satelliteForDelete);

  if (satelliteIndex !== -1) {
    planets[planetIndex].satellites.splice(satelliteIndex, 1);
  } else {
    alert("Satélite não encontrado");
  }
}


function Menu(){
  let userOption = 0;

  while (userOption !== 6) {
    const menu = `Painel Principal
      1 - Registrar novo planeta
      2 - Adicionar Satelites a um planeta
      3 - Atualizar situação de um planeta
      4 - Deletar Planeta
      5 - Listar planetas salvos
      6 - Sair
    `

    userOption = parseInt(prompt(menu))

    switch (userOption) {
      case 1:
        SaveNewPlanet()
        break
      case 2:
        const name = prompt("Digite nome do planeta")
        addSatellites(name)
        break
      case 3:
        const namePlanet = prompt("Digite nome do planeta")
        updateSituationPlanet(namePlanet)
        break
      case 4:
        const namePlanetForDelete= prompt("Digite nome do planeta")
        deleteSatellite(namePlanetForDelete)
        break
      case 5:
        showAllPlanets()
        break
      case 6:
        alert('Encerrando o sistema...')
        break
      default:
        alert('Opção inválida! Retornando ao painel principal...')
        break;
    }
  }
}


Menu()