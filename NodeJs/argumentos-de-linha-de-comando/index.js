const args = process.argv

const nameArguments = {}

process.argv.slice(2).forEach((arg, index, array)=>{
  if (arg.startsWith("--")){
    const argName = arg.slice(2)
    const argValue = array[index + 1]
    nameArguments[argName] = argValue
  }
})

console.log("Argumentos informado: ")
console.log(nameArguments)