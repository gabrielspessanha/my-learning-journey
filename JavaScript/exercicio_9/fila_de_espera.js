
let fila = ["Mateus","Marcos","Robson","Gabriel"]
let escolha = ""
let pacientes = "pacientes: "
do {
escolha = prompt("Bem-vindo a consulta Médica, Oque você deseja? \n\n" +
"a) Novo paciente \n"+
"b) Consultar Paciente\n"+
"c) Ver pacientes na fila de espera \n" +
"e) Sair" )

if (escolha === "a"){
  fila.push(prompt("digite o nome do paciente: "))
}else if(escolha === "b"){
  fila.shift()
  let consulta = fila.indexOf(prompt("qual paciente? "))
  if (consulta === -1) {
    alert("Paciente não encontrado na fila de espera")
  }else{
    alert(`Paciente na posição ${consulta +1}° da fila`)
  }
 
}else if (escolha === "c"){
  
  for (let i in fila){
    pacientes += `\n ${i}° ${fila[i]}`
  }
  alert(pacientes)
}else if (escolha === "e"){
  alert("encerrando...")
  break
}else {
  alert("opção invalida!!")
}

} while (escolha !== "e");