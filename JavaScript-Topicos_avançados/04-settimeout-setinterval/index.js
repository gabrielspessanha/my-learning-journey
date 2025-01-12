console.log("Programa Iniciado!")

/* const timeoutId = setTimeout(()=> {
  console.log("3 segundos se passaram desde que o programa foi iniciado")
}, 1000 * 3)
clearTimeout(timeoutId) */

let seconds = 0


const intervalId = setInterval(()=>{
  seconds +=3
  console.log(`Se passaram ${seconds} segundos`)

  if (seconds>=12){
    clearInterval(intervalId)
    console.log("Programa finalizado")
  }
}, 1000 * 3)