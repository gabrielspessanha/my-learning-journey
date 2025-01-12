const express = require("express")
const routes = require("./src/routes");

require("./config/associations")
const app = express();

app.use(express.json())
app.use(routes)

app.listen(3000);