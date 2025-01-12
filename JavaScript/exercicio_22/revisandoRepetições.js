const shipName = prompt("Digite o nome da espaçonave: ")
let newshipName=[]



for(let i = shipName.length-1;i>= 0;i--){
  if(shipName[i]!== "e"){
    newshipName +=shipName[i]
  }
}

console.log("Nome invertido: "+newshipName)