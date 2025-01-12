function imc(weight,height){
  return new Promise( (resolve, reject)=>{
    console.log('Calculando IMC...')
    setTimeout(()=>{
      if (!(typeof weight === 'number' && typeof height === 'number') ){
        reject('Não é um número!')
      }else{
        resolve(calculateImc(weight,height))
      }
    },1000*2)
  })
}

function calculateImc(weight,height){
  return weight / (height * height)
}

function displayResult(result){
  if (result < 18.5){
    console.log('Imc: ' + result.toFixed(2) +' Magreza')

  }else if(result > 18.5 && result < 24.9){
    console.log('Imc: ' + result.toFixed(2) +' Normal')

  }else if(result > 25 && result < 29.9){
    console.log('Imc: ' + result.toFixed(2) +' sobrepeso')

  }else if(result > 30 && result < 39.9){
    console.log('Imc: ' + result.toFixed(2) +' obesidade')

  }else if(result >= 40 ){
    console.log('Imc: ' + result.toFixed(2) +' obesidade grave')
  }
}Imc: ' + result +'


imc(85,1.84).then((result)=>{
  displayResult(result)
}).catch((err)=>{
  console.log(err)
}).finally(()=>{
  console.log("Finalizado...")
})