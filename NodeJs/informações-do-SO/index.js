const os = require("node:os")

const plataforma = os.platform()
console.log("Plataforma do SO: ", plataforma)

const Arquitetura = os.arch()
console.log("Arquitetura do SO: ", Arquitetura)

const processadores = os.cpus()
console.log("Informaçõe da CPU: ", processadores.length)

const memoria = os.totalmem()
console.log("Total de memória do PC: ", memoria / 1024 / 1024 / 1024, "GB")

const momoriaLivre = os.freemem()
console.log("Memória Livre do PC: ", momoriaLivre / 1024 / 1024 / 1024 ,"GB")