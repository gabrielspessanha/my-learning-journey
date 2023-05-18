let opcao = "";
let novaDescricao = "";
let novaVaga = "";
let novaData = "";
let output = "";
let nomeCandidato = "";
let lista = "";
let indiceVaga = -1;
let proficao = {};
let confirmar = false;

const vagas = [
  {emprego:"Motoboy", cadidatos: 0 , descricao: "Trabalhar entregando comida", data:"sem limite de tempo",inscritos:""},
  {emprego:"Carteiro", cadidatos: 0 , descricao: "Trabalhar entragando encomendas e cartas", data:"sem limite de tempo",inscritos:""},
  {emprego:"Motorista", cadidatos: 0 , descricao: "trabalhar como motorista de onibus", data:"sem limite de tempo",inscritos:""},
  {emprego:"Médico", cadidatos: 0 , descricao: "Trabalhar como Médico no hospital ", data:"sem limite de tempo",inscritos:""}
]

function listarVagas(){
  lista = ""
  proficao = vagas.map(function(elemento,indice){
  return `${indice + 1}.` + elemento.emprego
  })
  for (let i in proficao){
   lista +="\n"+ proficao[i]
  }
  return lista}

function visualizarVagas(){
  if (indiceVaga>= 0 && indiceVaga <= vagas.length){
    var saida = vagas[indiceVaga - 1]
    var mensagem = `Informações sobre essa vaga: \n\nIndice: ${indiceVaga}\nTrabalho: ${saida.emprego} \nCandidatos: ${saida.cadidatos} \nDescrição: ${saida.descricao} \nDatalimite: ${saida.data} \nNome dos candidatos: ${saida.inscritos}`

    alert(mensagem)
    }else{
    alert("Escolha invalida")}}

do{
  opcao = prompt("Bem vindo, escolha uma opção: \n\n"+
  `1. Listar vagas disponiveis \n`+
  `2. Criar uma nova vaga \n`+
  `3. Visualizar uma vaga \n`+
  `4. Se inscrever numa vaga: \n`+
  `5. Excluir uma vaga \n`+
  `6. Sair`)

  switch (opcao){
      case "1":
        if (Number(vagas) === 0){
          alert("Não há vagas Disponiveis")
        }else{
          proficao = vagas.map(function(elemento,indice){
            return `${indice + 1}.` + elemento.emprego + ". candidatos: "+ elemento.cadidatos
          })
          for (let i in proficao){
            output += "\n" + proficao[i]
            }
          alert(output)}
        output= ""
        break

      case "2":
        novaVaga = prompt("Digite o nome da vaga?")
        novaDescricao = prompt("Digite descrição da vaga:")
        novaData = prompt("Digite a dara limite")
        confirmar = confirm("deseja criar essa vaga? ")
        if (confirmar){
          vagas.push({emprego:novaVaga, cadidatos: 0 , descricao: novaDescricao , data: novaData ,inscritos: ""}) 
          alert("vaga adicionada")
        }else{
          alert("cancelando... Voltando ao menu")
        }
        break

      case "3":
        output = listarVagas()
        indiceVaga =parseFloat(prompt("qual é o numero da vaga? \n"+
        "vagas:\n"+ output 
        ))
        
        visualizarVagas() 
        output = ""
        proficao = ""
        break
      case "4":
        output = listarVagas()
        nomeCandidato = prompt("Digite o nome do candidato: ")
        indiceVaga =parseFloat(prompt("qual é o numero da vaga? \n"+
        "vagas:" +"."+ output 
        ))
        output = ""
        confirmar = confirm("Confirmar inscrição? ")
        visualizarVagas() 
        if (confirmar){
          vagas.forEach(function(elemento,indice){
            if (indice === indiceVaga -1){
              elemento.cadidatos +=  1
              elemento.inscritos += nomeCandidato +" ."
          }})
          alert("Incrição concluida")
          }else{
          alert("Incrição cancelada")
          }
        break
        case "5":
        output = listarVagas()
        indiceVaga =parseFloat(prompt("Digite a vaga que deseja excluir: \n"+
        "vagas:" +"."+ output 
        ))
        confirmar = confirm("Confirmar Exclusão? ")
        if (confirmar){
          vagas.splice(indiceVaga -1, 1)

          alert("vaga excluida")
        }else{
          alert("cancelando Exclusão")
        }
        output = ""
        break
      case "6":
        alert("encerrando....")
        break
      default:
        alert("opção invalida")
        opcao = "6"
  }

}while(opcao !== "6")