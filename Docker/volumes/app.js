const fs = require("node:fs")
const path = require("node:path")
const readLine = require("node:readline")

function writeNewFile(nameFile, content){
  const fullPath = path.join(__dirname,"documents", nameFile +".txt")
  console.log(fullPath)

  if(content === null || content === undefined){
    return console.log("Input vazio, pfvr escreva algo")
  }
  fs.writeFile(fullPath,content,"utf8",(error)=>{
    if(error){
      console.log("Erro ao escrever arquivo: ", error.message)
      return
    }
    console.log("Arquivo Criado com sucesso")
  })
}

function askQuestion(question){
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  return new Promise((resolve)=>{
    rl.question(question , (answer)=>{
      resolve(answer)
      rl.close
    })
  })
}


async function menu(){
  let answer
  do{
    const nameFile = await askQuestion("Nome do arquivo!!: ")
    answer = await askQuestion("Conteúdo para arquivo "+ nameFile + ": ")

    writeNewFile(nameFile, answer)

  }while(answer !== "parar" || answer !== "stop")

}

menu()