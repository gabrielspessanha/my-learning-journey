const resultInput = document.querySelector('#result')
const input = document.getElementById('input')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

const charkey = (charKeyBtn) => {
  charKeyBtn.addEventListener('click',function(){
    const value = charKeyBtn.dataset.value
    input.value += value
  })
}

const eventCopy = (ev) =>{
  const button = ev.currentTarget
  if (button.innerText === 'Copy'){
    button.innerText = 'Copied'
    button.classList.add('success')
    navigator.clipboard.writeText(resultInput.value)
  }else{
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
}

const eventKey = (ev) => {
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)){
      input.value += ev.key
      return
  }
  if (ev.key === 'Backspace'){
    input.value = input.value.slice(0,-1)
  }
  if (ev.key ==='Enter'){
    calculate()
  }
}
const eventFocus = function(){
  input.value = ''
  input.focus()
}


export {eventCopy,eventKey, eventFocus,charkey}