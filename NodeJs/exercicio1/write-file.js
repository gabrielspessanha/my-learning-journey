const fs = require('node:fs')

function createNewDocument(content){

  fs.writeFileSync("./meuarquivo.txt",content,"utf-8")
  console.log("Arquivo criado com sucesso!")
}


module.exports = createNewDocument