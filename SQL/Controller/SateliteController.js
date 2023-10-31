const Satelite = require("../models/Satelite")
const Planet = require("../models/Planet")

module.exports = {
  async store (req, res){
    const {planetId} = req.params;
    const { name, serial_number} = req.body

    const planet = await Planet.findByPk(planetId);
  }
}