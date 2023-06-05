/*---------------- Média Aritmética Simples ----------------- 
function mediaSimples(...numbers){
  let weights = 0
  const soma = numbers.reduce((accumulator,elemento) =>{
    weights += elemento.p
    return accumulator + (elemento.n*elemento.p)
  },0)
  return soma/weights
  
}


const media = (mediaSimples({n: 7,p:2},{n: 9,p:5},{n: 3,p:1}))
alert(`Á media dos elementos foi: ${media.toFixed(2)}`)

*/


/*---------------- MEDIANA ----------------- 
const mediana = (...numbers) => {
  if (numbers.length%2 === 0){
    const indiceParSuperior = numbers[numbers.length / 2]
    const indiceParInferior = numbers[numbers.length / 2 - 1]

    return (indiceParSuperior + indiceParInferior) /2
  }else{
    const indiceMediana = numbers[numbers.length / 2]

    return indiceMediana
  }
};


alert(mediana(2,4,5,7,42,99))
*/



const result = (...numbers) =>  {
  const frequency = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])
  frequency.sort((a,b) => b[1] - a[1])
  return frequency [0][0]
}


console.log(result(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4))