let array = ['Ola, mundo' , 'Batata' , 'Morango']
console.log(...array[0])
console.log(array)


const arrayCopy = array

arrayCopy.pop()
arrayCopy.push('Abacate')

console.log(arrayCopy, array)


const cloneArray = [...array]

cloneArray.push('Pipoca')

console.log(cloneArray,arrayCopy,array)