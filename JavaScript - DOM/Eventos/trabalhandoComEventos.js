
function register(event){
  console.log(event)
  console.log(event.target.parentNode.children.username)

}

const button = document.querySelector(`#register-button`)

button.addEventListener('click', register)
