const express = require("express")
const routes = express.Router();

const planetController = require("../Controller/PlanetController")
const SateliteController = require("../Controller/SateliteController");
const CapController = require("../Controller/CapController");
const SpaceshipController = require("../Controller/SpaceshipController")



routes.post("/planets", planetController.store);
routes.get("/planets", planetController.index);
routes.get("/planet/:planetId", planetController.find);
routes.put("/planets/:id", planetController.put)
routes.delete("/planets/:id", planetController.delete)

routes.post("/planet/:planetId/satelites", SateliteController.store)
routes.get("/planet/:planetId/satelites", SateliteController.index)

routes.post("/cap", CapController.store)
routes.get("/cap", CapController.index)

routes.post("/caps/:capId/spaceships", SpaceshipController.store)
routes.get("/caps/:capId/spaceships", SpaceshipController.index)
module.exports = routes