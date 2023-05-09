let palavra = prompt("Escreva um palavra \n*Que será verificada se é um palindromo ou não*")
let palindromo = ""
let i = palavra.length - 1
for (i; i>-1; i--){
  palindromo  += palavra[i]
}
if (palindromo === palavra){
  alert(`${palavra} É UM PALINDROMO`)
}else{
  alert(`ficaria " ${palindromo} " e não é um palindromo`)
}
console.log(palindromo)