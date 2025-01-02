const express = require('express')
const path = require('path')
const url = require('url')

const app = express()

const port = 3000 //variavel ambiente

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

const basePath = path.join(__dirname, 'templates')

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/usersforms.html`)
})

app.post('/users/save', (req, res) => {
  console.log(req.body)

  const name = req.body.name
  const age = req.body.age

  console.log(`O nome do usuario e ${name} e ele tem ${age} anos`)
});

app.get('/users/:id',(req, res) => {

  const id = req.params.id

  console.log(`Estamos buscando pelo usuario: ${id}`)

  res.sendFile(`${basePath}/users.html`)
})

app.get('/',(req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () =>{
  console.log('App rodando na porta',port)
})
