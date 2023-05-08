let dinheiro = parseFloat(prompt("quanto dinheiro você possui? "))
let opcao = prompt(`Você possui ${dinheiro} reais. \n`+
"\n a) Adicionar dinheiro" +
"\n b) Remover dinheiro"+
"\n c) Sair")
soma= 0
remove = 0

do{

if (opcao === "a"){
  soma = parseFloat(prompt("quanto deseja adicionar? "))
  dinheiro += soma
}else if(opcao === "b"){
  let remove = parseFloat(prompt("quanto deseja remover? "))
  dinheiro -= remove
}
  opcao = prompt(`Você possui ${dinheiro} reais. \n`+
  "\n a) Adicionar dinheiro" +
  "\n b) Remover dinheiro"+
  "\n c) Sair")

} while (opcao !== "c")