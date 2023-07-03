const Character = require('./Character')

class Mage extends Character{
  constructor(magicPoints,namep,pointsLife,attack,shield){
    super(namep,pointsLife,attack,shield)
    this.magicPoints= magicPoints
  }

  attackPerson(prey){
    const damage = prey.pointsLife - (this.magicPoints + this.attack - prey.shield)
    console.log('Personagem atacado! Dano causado: '+ (this.magicPoints + this.attack - prey.shield))
    return prey.pointsLife = damage
  }

  heal(prey){
    return prey.pointsLife +=  2*this.magicPoints
  }
}

module.exports = Mage