function funcao (){
  const ul = document.getElementById("inputs")

  const newLi = document.createElement("li")
  newLi.className = "list_item"
  newLi.innerText = `Digite seu nome: `
  newLi.innerText = `Olá Mundo: `

  const newInput = document.createElement(`input`)
  newInput.type = "text"
  newInput.name = "input"

  newLi.appendChild(newInput)
  ul.appendChild(newLi)
}