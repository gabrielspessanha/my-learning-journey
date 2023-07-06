class Installments{
  constructor(valueInstallment, indiceInstallment){
    this.valueInstallment = valueInstallment
    this.indiceInstallment = indiceInstallment
    this.situationInstallment = 'Pendente'
  }


  payInstallment(value){
    if (value >= this.valueInstallment){
      this.situationInstallment = 'Paga'
      const change = value - this.valueInstallment
      return change
    }else {
      const change = this.valueInstallment - value
      this.valueInstallment -= value
      return change 
    }
  }

}



module.exports = Installments