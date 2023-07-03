const Character = require('./Character')


class Thief extends Character{
  attackPerson(prey){
    const damage = prey.pointsLife - (this.attack - prey.shield)*2
    console.log('Personagem atacado! Dano causado: '+ (2*(this.attack - prey.shield)))
    return prey.pointsLife = damage
  }
}


module.exports = Thief 