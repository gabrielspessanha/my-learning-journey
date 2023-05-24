function addPlayer(){
  const  climbPlayer= document.getElementById("escalarTime")
  const ul = document.createElement("ul")
  ul.id = "ul-inputs"

  const positionLi = document.createElement("li")
  positionLi.innerText = "Posição do jogador: "

  const positionInput = document.createElement("input")
  positionInput.type = "text"
  positionInput.name = "positionPlayer"
  positionInput.id = "position"
  positionLi.appendChild(positionInput)
  ul.append(positionLi,document.createElement("br"))


  const namePlayerLi = document.createElement("li")
  namePlayerLi.innerText = "Nome do jogador: "

  const playerInput = document.createElement("input")
  playerInput.type = "text"
  playerInput.name = "name"
  playerInput.id = "name"
  namePlayerLi.appendChild(playerInput)
  ul.append(namePlayerLi,document.createElement("br"))


  const shirtLi = document.createElement("li")
  shirtLi.innerText = "Numero da Camisa: "

  const shirtInput = document.createElement("input")
  shirtInput.type = "number"
  shirtInput.name = "number"
  shirtInput.id = "number"
  shirtLi.appendChild(shirtInput)
  ul.append(shirtLi,document.createElement("br"))

  climbPlayer.appendChild(ul)

  const btnConfirm = document.getElementById("buttonConfirm")
  const buttonClimb = document.createElement("button")
  buttonClimb.innerText = "Confirmar"
  buttonClimb.id = "btnClimb"
  buttonClimb.className = "btnClimbTeam"
  buttonClimb.onclick = confirmar;
  btnConfirm.appendChild(buttonClimb)

  
}

function confirmar(){
  if (confirm("Deseja adicionar jogador?")){

      const  climbTeam= document.getElementById("buttonConfirm")
      const  climbPlayer= document.getElementById("escalarTime")
      const  buttonClimb = document.getElementById("btnClimb")
      const  ul = document.getElementById("ul-inputs")
      const  players=[] 
      
      const positionPlayer = document.getElementById("position").value
      const namePlayer = document.getElementById("name").value
      const numberPlayer = document.getElementById("number").value

      alert("jogador " + namePlayer + " como " + positionPlayer + " adicionado")
      
      const time = document.getElementById("timeSection")
      time.innerText = `\n\n Posição: ${positionPlayer} \n\n` +
      `Nome: ${namePlayer} \n\n` +
      `Camisa: ${numberPlayer} \n\n`

      time.append(time)

      players.push({positionPlayer,namePlayer , numberPlayer })

      console.log(players)

      climbTeam.removeChild(buttonClimb)
      climbPlayer.removeChild(ul)
  }
}
function listTeam() {

}


function removePlayer(){
  const climbPlayer = document.getElementById("escalarTime")
  const playerRemove = prompt("informe o numero da camisa do jogador que deseja remover")

  const valueShirt = document.getElementsByClassName("shirt-number")
  valueShirt = valueShirt.value
  alert(valueShirt)
}