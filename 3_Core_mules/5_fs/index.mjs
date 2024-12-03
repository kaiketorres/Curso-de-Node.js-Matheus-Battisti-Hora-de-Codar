import http from 'http'
import fs from 'fs'

const port = 3000

const server = http.createServer((req, res) => {
 
 fs.readFile('messagem.html', (err, data) =>{
  res.writeHead(200,{'Contenty-Type': 'text/html'})
  res.write(data)
  return res.end()
 })

})

server.listen(port, () => {
  console.log('Serve iniciado',port)
})