const fs = require('fs')

fs.writeFile('test.txt', 'Olá NodeJs', err =>{
  console.log(err)
})

fs.rename('test.txt', 'test2.txt', err =>{
  console.log(err)
})

fs.unlink('test2.txt', err =>{
  console.log(err)
})

console.log(__dirname) //caminho atual