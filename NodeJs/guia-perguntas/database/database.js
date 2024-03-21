const Sequelize = require("sequelize")
require('dotenv').config()

const connection = new Sequelize(
  'guiaperguntas',
  'root',
  process.env.MYSQL_ROOT_PASSWORD,
  {
    host: 'guia_api_container',
    dialect: 'mysql'
  }
);

module.exports = connection