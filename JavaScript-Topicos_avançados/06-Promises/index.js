function execute(){
  return new Promise( (resolve, reject)=>{
    console.log('A promise está sendo executada...')
    setTimeout(()=>{
      console.log('resolvendo a promise...')
      resolve('Resultado')
    },3000)
  })
}

const p = execute()
console.log('aaaaaaaaaaaaaaaa')
console.log(p)


setTimeout(()=>{
  console.log(p)
},4000)