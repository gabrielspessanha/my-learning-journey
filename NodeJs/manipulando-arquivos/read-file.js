const fs = require("node:fs")

const filename = "arquivo.csv"

const exists = fs.existsSync(filename)

if (exists){
  fs.readFile(filename,"utf-8", (error,data)=>{
    if(error){
      console.log("Erro ao Ler arquivo"+ error.message)
      return
    }
    const entries = data.split(",")
    console.log(entries)
    entries.forEach(entry => console.log(entry))
  })
}else{
  console.log("Arquivo não existe")
}

/* try{
  const data = fs.readFileSync(filename,"utf-8")
  console.log(data)
}catch(error){
  console.log("Erro ao Ler arquivo"+ error.message)
} */