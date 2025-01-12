const fs = require("node:fs")

fs.unlink("arquivo.csv",(error)=>{
  if(error){
    console.log("Erro!! não foi possivel excluir error")
    return 
  }
  console.log("Arquivo Excluido!")
})