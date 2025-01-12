const array = [12,5,8,21,17,3]

if(array.length === 0){
  console.log('array vazia')
}else{
  var maior = array[0]
  for (let i in array){
    if(array[i]> maior){
      maior = array[i]
    }
  }
}
console.log(`O maior valor é: ${maior}`)
  
  
