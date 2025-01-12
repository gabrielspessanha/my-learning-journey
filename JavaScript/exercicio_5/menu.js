let opcao = prompt("Escolha uma das opções" +
"\n a) Contar até 10" +
"\n b) Dizer 'olá mundo' " +
"\n c) Dizer quantos planetas existem no nosso sistema solar" +
"\n d) Dizer 'bem-vindo ao meu Github'" +
"\n e) Encerrar" );
do {
  

  switch (opcao){
    case "a":
      const contar = [1,2,3,4,5,6,7,8,9,10]
      for (let i of contar){
        alert(i)
      }
      break
    case "b":
      alert("olá mundo")
      break
    case "c":
      alert("são 8 planetas, são eles: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno")
      break
    case "d":
      alert("Bem-vindo ao meu Github")
      break
    case "e":
      alert("Encerrando...")
      break
    }
    opcao = prompt("Escolha uma das opções" +
"\n a) Contar até 10" +
"\n b) Dizer 'olá mundo' " +
"\n c) Dizer quantos planetas existem no nosso sistema solar" +
"\n d) Dizer 'bem-vindo ao meu Github'" +
"\n e) Encerrar" );
} while(opcao !== "e"); 

console.log("encerrado")