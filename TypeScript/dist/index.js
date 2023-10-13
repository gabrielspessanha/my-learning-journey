function sendSpaceShip(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada pela capit\u00E3o ").concat(spaceship.captain, " foi enviada em uma miss\u00E3o"));
    return spaceship;
}
function accelarete(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
}
var spaceshipName = prompt('Insira o nome da nave.');
var spaceshipCaption = prompt('Insira o nome do capitão da nave.');
var currentShip = sendSpaceShip(spaceshipName, spaceshipCaption);
var speed = Number(prompt('Insira a velocidade para a qual deseja acelerar '));
accelarete(speed, currentShip);
