class Reservation {
  constructor(quests, room, days){
    this.quests = quests
    this.room = room
    this.days = days
    this.total = days * Reservation.baseFee
  }

  static baseFee = 150

  static showBaseFee(){
    console.log('Base Fee is ' + Reservation.baseFee)
  }
  static get premiumFee(){
    return Reservation.baseFee * 1.5
  }
}

const r1 = new Reservation(3,'405',3)

Reservation.baseFee = 200

const r2 = new Reservation(2,`596`,2)



Reservation.showBaseFee()
console.log(r1)
console.log(r2)
console.log('Premium Fee is: $'+ Reservation.premiumFee)
Reservation.showBaseFee()