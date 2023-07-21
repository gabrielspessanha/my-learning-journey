
function searchIndex(element){
    if(element[2] === false){
      return true 
    }else{
      return false
    }
  }

function takeInfo(array){
  let info = ""
  for(let i in array){
    info += `\nNave: ${array[i][0]}, tripulantes: ${array[i][1]}, engate: ${array[i][2]}`
  }

  alert(info)
}

const hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false]
]
const newShips = []

for(let i in hitchedSpaceships){
  if(hitchedSpaceships[i][1] > 9){
    newShips.push(hitchedSpaceships[i][0])
  }
}


alert(`Numero da plataforma da nave com engate pendente: ${hitchedSpaceships.findIndex(searchIndex) +1}`) 

for(let i in newShips){
  console.log(newShips[i].toUpperCase())
}

takeInfo(hitchedSpaceships)