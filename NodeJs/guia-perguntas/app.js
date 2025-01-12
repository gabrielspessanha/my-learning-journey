const express = require('express')
const app = express()
const connection = require("./database/database")
const Question = require('./database/Question')
const Response = require('./database/Response')
require('dotenv').config()
//Database

connection
  .authenticate()
  .then(()=>{
    console.log("Conexão com banco de dados feita com sucesso!")
  })
  .catch((error)=>{
    console.log(error)
  })

//pedindo para o express usar o EJS como view engine
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//rotas
app.get("/",(req,res)=>{
  Question.findAll({row: true, order: [
    ['id','DESC']
  ]}).then( questions =>{
    res.render("index",{
      questions: questions
    })
  })
  
})

app.get("/ask", (req,res)=>{
  res.render("ask")
})

app.post("/saveQuestion", (req, res)=>{
  
  const title = req.body.title
  const description = req.body.description

  Question.create({
    title: title,
    description: description
  }).then(()=>{
    res.redirect("/")
  })
})

app.get('/question/:id', (req,res)=>{
  const id = req.params.id;
  Question.findOne({
    where: {id: id}
  }).then(question =>{
    if(question != undefined){//pergunta achada

      Response.findAll({
        where: {questionId: question.id},
        order: [['id', 'DESC']]
      }).then( responses =>{
        res.render("question",{
          question: question,
          responses: responses
        })
      })

      
    }else{//pergunta não encontrada
      res.redirect("/")
    }
  })
})

app.post("/response",(req, res)=>{
  const body = req.body.body
  const questionId = req.body.question

  Response.create({
    body: body,
    questionId: questionId
  }).then(()=>{
    res.redirect("/question/"+questionId)
  })
})


app.listen(process.env.PORT,()=>{console.log("App rodando na porta "+ process.env.PORT)})