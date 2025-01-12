const fs = require("node:fs")

function updateDocFile(content){
  
  fs.appendFileSync("./meuarquivo.txt", content)
  console.log("Atualizado!")
}

module.exports = updateDocFile