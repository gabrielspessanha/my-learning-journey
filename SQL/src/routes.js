const express = require("express")
const routes = express.Router();

const planetController = require("../Controller/PlanetController")
const SateliteController = require("../Controller/SateliteController")

routes.post("/planets", planetController.store);
routes.get("/planets", planetController.index);
routes.get("/planet/:planetId", planetController.find);
routes.put("/planets/:id", planetController.put)
routes.delete("/planets/:id", planetController.delete)

routes.post("/planet/:planetId/satelites", SateliteController.store)
routes.get("/planet/:planetId/satelites", SateliteController.index)



module.exports = routes