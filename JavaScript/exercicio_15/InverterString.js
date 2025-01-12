
function numeroVogais(name){
  Array(name)
  vogais = []
  for (let i in name){
    if (name[i] === 'a'|| name[i] === 'e' || name[i] === 'i' || name[i] === 'o' || name[i] === 'u'){
     vogais.push(name[i]) 
    }
  }
  alert('quantidade de vogais em ' + name + ' : '+vogais.length)

  }
  




const name = prompt('digite um nome para inverter: ')
numeroVogais(name)
