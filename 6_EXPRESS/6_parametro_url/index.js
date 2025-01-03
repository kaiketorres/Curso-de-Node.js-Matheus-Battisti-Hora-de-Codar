const express = require('express')
const path = require('path')
const url = require('url')

const app = express()

const port = 3000 //variavel ambiente

const basePath = path.join(__dirname, 'templates')

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