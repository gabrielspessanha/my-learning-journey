var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var planets = [];
function SaveNewPlanet() {
    var name = prompt("Digite o nome do planeta");
    var coordinates = [];
    for (var i = 0; i < 4; i++) {
        var position = Number(prompt("Digite a ".concat(i + 1, "\u00B0 posi\u00E7\u00E3o")));
        coordinates.push(position);
    }
    var situation = addSituationPlanet();
    var satellites = confirm("Possui satelites?") ? addSatellites(name) : [""];
    var planet = {
        name: name,
        coordinates: coordinates,
        situation: situation,
        satellites: satellites
    };
    planets.push(planet);
}
function addSituationPlanet() {
    var situat = prompt("Digite a atual situação do planeta" +
        "\nhabitado\nhabitavel\ninabitavel\ninexplorado");
    if (situat !== "habitado" && situat !== "habitavel" && situat !== "inabitavel" && situat !== "inexplorado") {
        alert("Situação inválida");
        return;
    }
    return situat;
}
function addSatellites(name) {
    var planetIndex = planets.findIndex(function (planet) { return planet.name === name; });
    var numberSatellites = Number(prompt("Quantos satelites?"));
    var satelites = [];
    for (var i = 0; i < numberSatellites; i++) {
        var satellite = prompt("Nome do ".concat(i + 1, "\u00B0 Satelite"));
        satelites.push(satellite);
    }
    if (planetIndex === -1) {
        return satelites;
    }
    else {
        planets[planetIndex].satellites = __spreadArray([], satelites, true);
    }
}
function updateSituationPlanet(name) {
    var planetIndex = planets.findIndex(function (planet) { return planet.name === name; });
    var situation = prompt("Qual a situa\u00E7\u00E3o do planeta ".concat(planets[planetIndex].name, " ?") +
        "\nhabitado\nhabitavel\ninabitavel\ninexplorado");
    planets[planetIndex].name = situation;
}
function showAllPlanets() {
    planets.forEach(function (planet) {
        console.table(planet);
    });
    return;
}
function deleteSatellite(name) {
    var planetIndex = planets.findIndex(function (planet) { return planet.name === name; });
    if (planetIndex === -1) {
        alert("Planeta não encontrado");
        return;
    }
    var satelliteForDelete = prompt("Digite o nome do satélite que deseja excluir");
    var satelliteIndex = planets[planetIndex].satellites.findIndex(function (e) { return e === satelliteForDelete; });
    if (satelliteIndex !== -1) {
        planets[planetIndex].satellites.splice(satelliteIndex, 1);
    }
    else {
        alert("Satélite não encontrado");
    }
}
function Menu() {
    var userOption = 0;
    while (userOption !== 6) {
        var menu = "Painel Principal\n      1 - Registrar novo planeta\n      2 - Adicionar Satelites a um planeta\n      3 - Atualizar situa\u00E7\u00E3o de um planeta\n      4 - Deletar Planeta\n      5 - Listar planetas salvos\n      6 - Sair\n    ";
        userOption = parseInt(prompt(menu));
        switch (userOption) {
            case 1:
                SaveNewPlanet();
                break;
            case 2:
                var name_1 = prompt("Digite nome do planeta");
                addSatellites(name_1);
                break;
            case 3:
                var namePlanet = prompt("Digite nome do planeta");
                updateSituationPlanet(namePlanet);
                break;
            case 4:
                var namePlanetForDelete = prompt("Digite nome do planeta");
                deleteSatellite(namePlanetForDelete);
                break;
            case 5:
                showAllPlanets();
                break;
            case 6:
                alert('Encerrando o sistema...');
                break;
            default:
                alert('Opção inválida! Retornando ao painel principal...');
                break;
        }
    }
}
Menu();
