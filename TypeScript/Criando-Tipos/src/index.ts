
type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

let homePlanet: Planet
homePlanet = "Terra"

let milkyWay: Planet[]

function checkPlanet(planet: Planet) {
  if (planet === "Terra") {
    console.log("Estamos na Terra")
  }

  if (planet === "Marte"){
    console.log("Estamos em Marte")
  }
}

