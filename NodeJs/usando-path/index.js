const path = require("node:path")

const dir = "src"
const file = "app.js"
const fullpath = path.join(__dirname)
//const fullpath = path.join("src","scripts","arquivo.js") //serve para juntar todos os argumentos

console.log(fullpath)