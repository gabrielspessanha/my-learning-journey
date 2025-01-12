
function desacelerar(ship){
  if(ship.speed > 0){
    ship.speed -= 20
    if(ship.speed <0){
      ship.speed = 0
    }
    alert("velocidade reduzida em 20Km/s\nVelocidade atual: "+ship.speed+"km/s")
    ship.seconds += 1
    desacelerar(ship)
  }else{
    console.log("Nave Parada, As comportas já podem ser abertas")
    return
  }
  
}
const ship = {
  speed: 150,
  seconds: 0,
}

desacelerar(ship)

alert("Nave demorou "+ship.seconds+ " segundos para desacelerar")