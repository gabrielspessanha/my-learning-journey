const fs = require("node:fs")

function deleteDocFile(doc){
  fs.unlink(doc,(error)=>{
    if(error){
      console.log("Não foi possivel excluir arquivo desejado!")
      return
    }

    console.log("Arquivo deletado com sucesso!")
  })
}

module.exports = deleteDocFile