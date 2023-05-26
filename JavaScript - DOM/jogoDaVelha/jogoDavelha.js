const start = document.getElementById('start')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
var h2 = document.getElementById('vezJogador')


function boxClicked(ev){
  const box = ev.currentTarget
  console.log('fiiimmmmmmm')
  if (h2.innerText === 'Jogador: ' + player1.value){
    if(box.value === true){
      alert('botão já clicado')
      return
    }
    box.classList.add('actived1')
    box.value = true
    box.pointerEvents = 'none'
    h2.innerText = 'Jogador: ' + player2.value
    return
  }
    
  if(h2.innerText === 'Jogador: ' + player2.value){
    if(box.value === true){
      alert('botão já clicado')
      return
    }
    box.classList.add('actived2')
    box.value = true
    box.pointerEvents = 'none'
    h2.innerText = 'Jogador: ' + player1.value
    return
  }
}


document.getElementById('start').addEventListener('click', function(){
  h2.innerText = 'Jogador: ' + player1.value
  h2.classList.add('vezJogador')

  document.querySelectorAll('.box').forEach(function(elemento){
    elemento.addEventListener('click', boxClicked)
    
  })
  
  }
)

