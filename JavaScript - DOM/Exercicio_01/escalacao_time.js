function addPlayer(){
  const position = document.getElementById("position").value
  const name = document.getElementById("name").value
  const number= document.getElementById("number").value

  const confirmation = confirm(`Escalar ${name} como ${position} ?`)

  if (confirmation){
    const teamList = document.getElementById("teamList")
    const playerItem = document.createElement("li")
    playerItem.id = `player-${number}` 
    playerItem.innerText = `${position}: ${name} (${number})`
    teamList.appendChild(playerItem)

    document.getElementById("position").value = ``
    document.getElementById("name").value = ``
    document.getElementById("number").value= ``
  }
}


function removePlayer(){
  const number = document.getElementById("numberToRemove").value
  const PlayerToRemove = document.getElementById(`player-${number}`)

  const confirmation = confirm(`Remover o jogador:  ${PlayerToRemove.innerText}?`)

  if (confirmation){
    document.getElementById(`teamList`).removeChild(PlayerToRemove)
    document.getElementById(`numberToRemove`).value = ``
  }
}