function pesquisBinaria(nomes, item){
  var baixo = 0
  var alto = nomes.length - 1
  let meio
  let passos = 0
  do{
    passos ++
    meio = Math.floor((baixo + alto)/2)
    let chute = nomes[meio]
    if (chute === item){
      console.log(`Era a posição ${chute}° foi necessario ${passos} passos`)
    }else if(chute < item){
      baixo = chute + 1
    }else if(chute > item){
      alto = chute -1
    }else{
      console.log(`o valor ${item} não é valido`)
    }

  }while(meio !== item) 
}
nomesPosicao = []

for (let i= 0; i <= 256; i++){
  nomesPosicao.push(i)
}
pesquisBinaria(nomesPosicao, 256)