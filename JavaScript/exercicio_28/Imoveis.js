class Imoveis{
  static #listImoveis = []
  constructor(houseType, area, rented){
    this.houseType = houseType
    this.area = area
    this.rented = rented
    this.setAddProperty(this)
  }

  setAddProperty(item){
    Imoveis.#listImoveis.push(item)
  }

  get listImoveis(){
    return Imoveis.#listImoveis
  }
}
