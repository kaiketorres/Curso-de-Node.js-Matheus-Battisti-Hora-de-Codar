import http from 'http'

const port = 3000

const server = http.createServer((req ,res) => {
  res.statusCode = 200
  res.setHeader('Contenty-Type', 'text/html')
  res.end('<h1>Ola, este e meu primeiro server com HTML!</h1> <p>Testando atualizacao</p>')
})

server.listen(port, () => {
  console.log('Servidor iniciado:',port)
})