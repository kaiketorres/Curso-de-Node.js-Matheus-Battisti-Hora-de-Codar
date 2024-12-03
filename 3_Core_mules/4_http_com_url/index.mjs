import http from 'http'
import url from 'url'

const port = 3000

const server = http.createServer((req, res) => {

  const urlInfo = url.parse(req.url, true)
  const name = urlInfo.query.name

  res.statusCode = 200
  res.setHeader('Contenty-Type', 'text/html')
  if(!name){
  res.end('<h1>Preencha o seu nome:<form method="GET"> <input type="text" name="name" /><input type="submit" value="Enviar"</h1></form>')
  } else {
  res.end(`<h1>Seja bem-vindo ${name}`)
  }
})

server.listen(port, () => {
  console.log('Serve iniciado',port)
})