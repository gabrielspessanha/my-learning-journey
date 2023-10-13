var spaceships = [];
function createSpaceShip(event) {
    event.preventDefault();
    var nameShip = document.querySelector('#nameship').value;
    var pilotShipName = document.querySelector('#pilotShipName').value;
    var crewship = +document.querySelector('#crewship').value;
    var spaceship = createShip(nameShip, pilotShipName, crewship);
    spaceships.push(spaceship);
    creatListSpaceShips(spaceship);
    alert("A nave ".concat(spaceship.name, " foi adicionada!"));
}
function creatListSpaceShips(spaceship) {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var btnSendMember = document.createElement('button');
    btnSendMember.innerText = 'Adicionar piloto';
    btnSendMember.className = 'addmember';
    btnSendMember.onclick = addmember;
    btnSendMember.value = spaceship.name;
    var button = document.createElement('button');
    button.innerText = 'Enviar em missão';
    button.className = 'sendToMision';
    button.onclick = sendShiptToMission;
    button.value = spaceship.name;
    li.innerText = "Nave: ".concat(spaceship.name, " | Capit\u00E3o: ").concat(spaceship.pilot, " | Tamanho da equipe: ").concat(spaceship.crewlimit, " | Equipe: ").concat(spaceship.crew, " | Em miss\u00E3o: ").concat(spaceship.inMission ? "Sim" : "Não", " ");
    li.append(button, btnSendMember);
    ul.appendChild(li);
    document.querySelector('#ships').appendChild(ul);
}
function createShip(name, pilot, crewlimit) {
    var spaceship = {
        name: name,
        pilot: pilot,
        crewlimit: crewlimit,
        crew: [],
        inMission: false
    };
    return spaceship;
}
function addmember(event) {
    var vl = event.target.value;
    var spaceshipIndex = spaceships.findIndex(function (space) { return space.name === vl; });
    var newMember = prompt('Nome do novo membro da tripulação');
    var spaceship = spaceships[spaceshipIndex];
    sendPilotTocrew(newMember, spaceship);
}
function sendPilotTocrew(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewlimit) {
        alert("".concat(member, " n\u00E3o pode ser adicionado. Limite atingido. "));
    }
    else {
        spaceship.crew.push(member);
        alert("".concat(member, " foi adicionado \u00E0 tripula\u00E7\u00E3o da ").concat(spaceship.name, " "));
    }
}
function sendShiptToMission(event) {
    var vl = event.target.value;
    var spaceshipIndex = spaceships.findIndex(function (space) { return space.name === vl; });
    if (spaceshipIndex !== -1) {
        var spaceship = spaceships[spaceshipIndex];
        if (!(spaceship.inMission) && spaceship.crew.length > 0) {
            spaceship.inMission = true;
            alert("nave enviada em missão!");
        }
        else if (spaceship.crew.length === 0) {
            alert("Nave não pode partir sozinha");
        }
        else {
            alert("Nave não pode partir");
        }
    }
    else {
        alert("nave não encontrada");
    }
}
function showSpaceships() {
    spaceships.forEach(function (ship) { return console.log(ship); });
}
document.querySelector('#btnSubmit').addEventListener('click', createSpaceShip);
