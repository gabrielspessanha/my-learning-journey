const Character = require('./Character')
const Mage = require('./Mage')
const Thief = require('./Thief')
const  Warrior  = require('./Warrior')

const soldado = new Character('gabrielito',300,44,70)
const guerreira = new Warrior(40,'attack','gabrielle',400,70,90)
const ladrao = new Thief('bolsonaro',30,100,30)
const mago = new Mage(100,'Gandalf',50,80,10)

console.table({soldado,guerreira,ladrao,mago})

guerreira.attackPerson(ladrao)
mago.attackPerson(soldado)

guerreira.changePosition()

ladrao.attackPerson(guerreira)

console.table({soldado,guerreira,ladrao,mago})
