const express = require("express")
const routes = express.Router();

const planetController = require("../Controller/PlanetController")

routes.post("/planets", planetController.store);
routes.get("/planets", planetController.index);
routes.put("/planets/:id", planetController.put)
routes.delete("/planets/:id", planetController.delete)

module.exports = routes