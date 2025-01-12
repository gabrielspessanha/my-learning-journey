async function imc(weight,height){
    console.log('Calculando IMC...')
    if (typeof weight !== 'number'|| typeof height !== 'number')
        return Promise.reject('Não é um número!')

    return weight / (height * height)
}

  async function showImc(weight,height){
    try{
        const result = await imc(weight,height)
        if (result < 18.5)console.log('Imc: ' + result.toFixed(2) +' Magreza')
        else if(result < 24.9)console.log('Imc: ' + result.toFixed(2) +' Normal')
        else if(result < 29.9)console.log('Imc: ' + result.toFixed(2) +' sobrepeso')
        else if(result < 39.9)console.log('Imc: ' + result.toFixed(2) +' obesidade')
        else console.log('Imc: ' + result.toFixed(2) +' obesidade grave')
    }catch(err){
        console.log(err)
    }
  }
  
  showImc(90,1.84)
  showImc(62,1.62)
  showImc(62,'null')
