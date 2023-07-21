class House{
  constructor(houseNumber, neighborhood, city, houseArea){
    this.houseNumber = houseNumber
    this.neighborhood = neighborhood
    this.city = city
    this.houseArea = houseArea
  }
}
function saveHouse(li){
  const numberHouse = document.getElementById('houseNumber').value
  const neighborhood = document.getElementById('neighborhood').value
  const city = document.getElementById('city').value
  const houseArea = document.getElementById('houseArea').value

  const newHouse= new House(numberHouse,neighborhood,city,houseArea)
  li.innerText = `Area: ${newHouse.houseArea}m², número ${newHouse.houseNumber} (${newHouse.neighborhood} - ${newHouse.city}) `

  const btnRemove = document.createElement('input')
  btnRemove.type = "button"
  btnRemove.Id = "btnRemove"
  btnRemove.value = "Remover"
  btnRemove.setAttribute("onclick", "removeHouse(this)")



  li.appendChild(btnRemove)
  document.getElementById('ul').appendChild(li)
}

function removeHouse(button){
  let liToRemove = button.parentNode.remove()
  document.getElementById("ul").removeChild(liToRemove)
}


const btn = document.getElementById("buttonSent").addEventListener('click',(event)=>{
  event.preventDefault()
  const li = document.createElement('li')
  saveHouse(li)
  //testando o comit
})