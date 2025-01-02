const express = require('express')
const path = require('path')

const app = express()

const port = 3000 //variavel ambiente

const basePath = path.join(__dirname, 'templates')


const cheackAuth = function( req, res, next){

 req.authStatus = false
 
 if(req.authStatus){
  console.log('Esta logado, pode continuar')
  next()
 } else {
  console.log('Nao esta logado, faca o login para continuar ')
  next()
 }

}


app.use(cheackAuth)

app.get('/',(req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () =>{
  console.log('App rodando na porta',port)
})