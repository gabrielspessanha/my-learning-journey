const Imoveis = require("./Imoveis.js")

class App{

  setCreateImovel(house, area, rented){
    if(house === "Casa"){
      new Imoveis("Casa",area,rented)
    }else if(house === "Apartamento"){
      new Imoveis("Apartamento",area,rented)
    }//212222222222222
  }
}
 