const start = document.getElementById('start')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
var h2 = document.getElementById('vezJogador')

function winner(){
  const bx1 = document.getElementsByClassName('box1')
  if (bx1.id){
    alert('parece que funcionou')
  }
}

function boxClicked(ev){
  const box = ev.currentTarget
  if(box.value === 'checked'){
    alert('botão já clicado')
    return
  }
  if (h2.innerText === 'Jogador: ' + player1.value){
    box.classList.add('actived1')
    box.value = 'checked'
    box.pointerEvents = 'none'
    h2.innerText = 'Jogador: ' + player2.value
    return
  }
    
  if(h2.innerText === 'Jogador: ' + player2.value){
    box.classList.add('actived2')
    box.value = 'checked'
    box.pointerEvents = 'none'
    h2.innerText = 'Jogador: ' + player1.value
    return
  }
}


document.getElementById('start').addEventListener('click', function(){
  if (player1.value === '' || player2.value === ''){
    alert('nomes invalidos')
  }else{
    h2.innerText = 'Jogador: ' + player1.value
    h2.classList.add('vezJogador')

    document.querySelectorAll('.box').forEach(function(elemento){
    elemento.addEventListener('click', boxClicked)
      })
    }
  }
)

