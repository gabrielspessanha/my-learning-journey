function pesquisBinaria(nomes, item){
  let meio = nomes/2
  let baixo = nomes[0]
  do{
    if (meio === item){
      console.log(`você acertou, era o nome na posição${meio}°.`)
    }else if(baixo < item){

    }



  }while(meio !== item) 
}

nomesPosicao = []

for (let i= 0; i <= 128; i++){
  nomesPosicao.push(i)
}
console.log(pesquisBinaria(nomesPosicao, 64))