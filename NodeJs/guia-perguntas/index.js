const express = require("express")
const app = express()

app.set('view engine','ejs')//pedindo para o express usar o EJS como view engine

app.get("/",(req,res)=>{

  const products = [
    {name: "Banan-prata", price: 12},
    {name: "Danone", price: 2.3},
    {name: "Macarrão", price: 4},
    {name: "Carne", price: 25},
    {name: "Redbull", price:7.99}
  ]
  const msg = false

  res.render("index",{
    name: "Gabriel",
    lang: "Javascript",
    msg,
    products,
  })
})


app.listen(8080,()=>{console.log("App rodando!")})