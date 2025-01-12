const path = require("node:path")
const fs = require("node:fs")
const readLine = require("node:readline")


function menu(){
  const question = `-----------------\n      Menu      \n-----------------
    \n1-Criar anotação\n2-Listar arquivos salvos\n3-Ler anotação especifica\n4-Excluir uma anotação\n5-Sair\n`

    userInteraction(question)
}

function askQuestion(question){
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  return new Promise((resolve)=>{
    rl.question(question, (answer)=>{
      resolve(answer)
      rl.close()
    })
  })
}

async function userInteraction(question){

  const answer = await askQuestion(question)

  switch (answer){

    case "1":
      const fileName = await askQuestion("Nome do arquivo: ")
      console.log(fileName)
      const content = await askQuestion(`Digite o conteúdo pro arquivo ${fileName}: `)
      console.log(content)
      createNewNotation(fileName,content)
      break
    case "2":
      listAllNotes()
      break
    case "3":
      const filerName = await askQuestion("Nome do arquivo: ")
      readFile(filerName)
      break
    case "4":
      const nameFileToDelete =await askQuestion("Nome do arquivo: ")
      deleteFile(nameFileToDelete)
      break
    case "5":
      console.log("Saindo...")
      rl.close()
      break
    default:
      console.log("Opção invalida")
      break
    
  }
}

function createNewNotation(nameFile, data){
  const filePath = path.resolve(__dirname,"notes",`${nameFile}.txt`)

  if(!fs.existsSync(path.join(__dirname,"notes"))){
    fs.mkdir(path.join(__dirname, "notes"),(error)=>{
      if(error){
        return console.error(error)
      }
      console.log("Pasta Criada com sucesso!")
    })
  }

  try{
    fs.writeFileSync(filePath,data,"utf-8")
    console.log("Arquivo criado com sucesso!")
  }catch(error){
    console.log("Erro ao criar anotação: "+ error.message)
  }
}
function listAllNotes(){
  const folderPath = path.join(__dirname,"notes")
  fs.readdir(folderPath,(error, data)=>{
    if(error){
     return console.error(error)
    }
    console.log("Arquivos: \n")
    data.forEach((note)=>{
      const noteName = path.parse(path.join(folderPath,note))
      fs.readFile(path.join(folderPath,note),(err,data)=>{
        if(err) console.log("Erro ao ler anotação: "+ err.message)
        console.log(`Arquivo: ${noteName.name} - ${data}`)
      })
    })
  })
}
function readFile(nameFile){
  const filePath = path.join(__dirname,"notes",`${nameFile}.txt`)
  try{
    const contentFile = fs.readFileSync(filePath,"utf-8")
    console.log(`Arquivo ${nameFile}: \n ${contentFile}`)
  }catch(error){
    console.log("Error ao ler arquivo informado: "+ error.message)
  }
}
function deleteFile(nameFile){
  const filePath = path.join(__dirname,"notes",`${nameFile}.txt`)
  fs.unlink(filePath,(err)=>{
    if(err){
      return console.log("Não foi possivel excluir arquivo informado: "+ err.message)
    }
    console.log(`Arquivo ${nameFile} deletado com sucesso!`)
  })
}

menu()
