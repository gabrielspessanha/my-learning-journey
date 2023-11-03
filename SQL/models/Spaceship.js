const { DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize")

const spaceship = sequelize.define("spaceship",{
  name: DataTypes.STRING,
  capacity: DataTypes.INTEGER
})

module.exports = spaceship