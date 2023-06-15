function isPrimo(num){
  if(num <= 1){
    console.log(num +" não é primo")
    return
  }

  for (let i = 2; i <= Math.sqrt(num); i++){
    if (num % i === 0){
      console.log(`O número ${num} não é primo`)
      return
    }
  }
  console.log(`O número ${num} é primo`)
  return 
}











isPrimo(1)
isPrimo(7)
isPrimo(26)
isPrimo(8)
isPrimo(13)
isPrimo(43)
