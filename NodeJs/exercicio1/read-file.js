const fs = require("node:fs")

function showFile(){
  const data = fs.readFileSync("./meuarquivo.txt","utf-8")
  console.log(data)
}

module.exports = showFile