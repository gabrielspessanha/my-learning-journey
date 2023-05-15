let imoveis = []
let escolha = ""
let i = 0
do {
escolha = prompt("BEM VINDO AO CADASTRO DE IMOVEIS \n " +
"----------------------------------------------- \n" +
`Imoveis cadastados: ${imoveis.length} \n` +
"----------------------------------------------- \n" +
"Escolha uma das opções: \n" +
"1) Salvar um imovel \n" +
"2) Mostrar imoveis salvos \n" +
"3) Sair ")
switch (escolha){
  case "1":
    imovel ={}
    imovel.nome = prompt("Nome do proprietário")
    imovel.quartos = parseFloat(prompt("Numero de quartos: "))
    imovel.banheiros =parseFloat(prompt("Numero de banheiros: "))
    imovel.garagem =prompt("Possui garagem? (sim/não)")
    const confirmacao = confirm(
      "Salvar este imovel? \n" +
      "\nProprietário: " + imovel.nome +
      "\nQuartos: " + imovel.quartos +
      "\nBanheiros: " + imovel.banheiros +
      "\nPossui garagem?  " + imovel.garagem 
      )
      if (confirmacao){
        imoveis.push(imovel)
        alert("Imovel salvo com sucesso!")
      }else{
        alert("cancelando, voltando pro menu")
      }
    break
  case "2":

    for ( i in imoveis){
      alert(
        `imovel ${parseFloat(i) + 1}` +
        `\nProprietario:  ${imoveis[i].nome}` +
        `\nQuartos:  ${imoveis[i].quartos}` +
        `\nBanheiros:  ${imoveis[i].banheiros}` +
        `\nPossui garagem?  ${imoveis[i].garagem}`
      )
    }
    break
  case "3":
    alert('encerrando...')
    break
  default:
    alert("erroo!!! opção invalida")
}
} while (escolha !== "3")
