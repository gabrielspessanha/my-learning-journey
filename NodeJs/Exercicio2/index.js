const path = require("node:path")
const os = require('node:os') 
const fs = require('node:fs')

function whatSystem(systemName){
  if (systemName ==="win32"){
    return "Windows"
  }else if(systemName === "linux"){
    return "Linux"
  }else if(systemName === "darwin"){
    return "macOS"
  }
}

function convertHours(seconds){
  let hours = seconds / 60 / 60
  hours = String(hours)
  const TimeInPc = hours.slice(0, 3) + " Horas\n"
  return TimeInPc
}

function calcBusyMemory(){
  const totalMem = os.totalmem()
  const freeMem = os.freemem() 
  const busyMem = (totalMem - freeMem)
  const memBusypercent = ( busyMem / totalMem) * 100

  return String(busyMem / 1024 / 1024 / 1024).slice(0,4) + `GB(${memBusypercent.toFixed(2)}%)`
}

function showAllPCInformations(){
    const arch = os.arch()
    const plataform = os.platform()
    const systemName = whatSystem(plataform)
    const cpuModel = os.cpus()
    const timeOfActivity = os.uptime()
    const busymem = calcBusyMemory()

    console.log(
      systemName, 
      arch, 
      cpuModel[0].model,
      convertHours(timeOfActivity),
      busymem
      )
    return `\n
    Sistema: ${systemName}\n
    Arquiteura do Sistema: ${arch}\n
    Plataforma: ${plataform}\n
    Modelo do CPU: ${cpuModel[0].model}\n
    Tempo de atividade: ${convertHours(timeOfActivity)}\n
    Uso de memória RAM: ${busymem}\n\n
    --------------------------------------------------------`
}

function newLog(){
  const content = showAllPCInformations()
  const rootPath = path.parse('/').root

  const logFolderPath = path.join(rootPath, 'log')

  if (!fs.existsSync(logFolderPath)) {
    fs.mkdirSync(logFolderPath);
    console.log('Pasta de log criada com sucesso.');
}
const logPathFile = path.join(logFolderPath, 'log.txt');

  if(!fs.existsSync(logPathFile)){
    fs.writeFile(logPathFile,content,(err)=>{
      if(err) throw err;
    })
  }else{
    fs.appendFile(logPathFile,content,"utf-8",(err)=>{
      if(err){
        console.log("Erro ao atualizar informações"+ err)
        return
      }
    })
  }

}

setInterval(newLog, 1000)
