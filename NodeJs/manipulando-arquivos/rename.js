const fs = require("node:fs")

fs.rename("arquivo.txt", "arquivo.csv", (error)=>{
  if (error){
    console.log("ERRO!! falha ao renomear arquivo", error.message)
    return
  }
  console.log("Arquivo renomeado com sucesso")
})