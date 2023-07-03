const Character = require('./Character')

class Warrior extends Character{
  constructor(pointsShield,position,namep,pointsLife,attack,shield){
    super(namep,pointsLife,attack,shield)
    this.pointsShield = pointsShield
    this.position = position
  }

  attackPerson(prey){
    if (this.position === 'attack'){
      const damage = prey.pointsLife - (this.attack - prey.shield)
      console.log('Personagem atacado! Dano causado: '+ (this.attack - prey.shield))
      return prey.pointsLife = damage
      
    }else{
      console.log('Não pode atacar na posição de defesa.')
    }
  }

  changePosition(){
    if(this.position === 'attack'){
      this.position = 'defending'
      this.shield += this.pointsShield
    }else{
      this.position = 'attack'
      this.shield -= this.pointsShield
    }
  }
}

module.exports = Warrior