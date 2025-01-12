class Character {
  constructor(namep, pointsLife, attack, shield){
    this.namep = namep
    this.pointsLife = pointsLife
    this.attack = attack 
    this.shield = shield
  }

  attackPerson(prey){
    const damage = prey.pointsLife - (this.attack - prey.shield)
    console.log('Personagem atacado! Dano causado: ' + (this.attack - prey.shield))
    return prey.pointsLife = damage
  }
}

module.exports = Character