
class App{

  addProperty(){
    event.preventDefault()
    let kind = document.querySelector("select[name='kind']").value
    let area = document.querySelector("input[name='area']").value
    let rented = document.querySelector("input[name='rented']").checked
    let property = new Property(kind, area, rented)
    this.addOnPropertiesList(property)
    this.cleanForm()
  }

  addOnPropertiesList(property){
    let listElement = document.createElement("li")
    let PropertyInfo = ` Tipo: ${property.kind} (Área: ${property.area}m²) `
    if (property.rented){
      let rentedMark = this.createRentedMark()
      listElement.appendChild(rentedMark)
    }
    listElement.innerHTML += PropertyInfo
    let buttonToRemove = this.createRemoveButton()
    listElement.appendChild(buttonToRemove)
    document.getElementById("properties").appendChild(listElement)
  }


  createRentedMark(){
    let rentedMark = document.createElement("span")
    rentedMark.style.color = "while"
    rentedMark.style.backgroundColor = "red"
    rentedMark.innerText = "ALUGADO"
    return rentedMark
  }


  createRemoveButton(){
    let buttonRemove = document.createElement("button")
    buttonRemove.setAttribute("onclick","app.remove()")
    buttonRemove.innerText = "Remover"
    return buttonRemove
  }

  cleanForm(){
    document.querySelector("input[name='area']").value = ""
    document.querySelector("input[name='rented']").checked = false

  }

  remove(){
    let liToremove = event.target.parentNode
    document.getElementById("properties").removeChild(liToremove)
  }
}
 