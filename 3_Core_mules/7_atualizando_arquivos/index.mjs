import http from 'http'
import url from 'url'
import fs from 'fs'

const port= 3000

const server = http.createServer((req,res) =>{

  const urlInfo = url.parse(req.url ,true)
  const name = urlInfo.query.name


if(!name){
  fs.readFile('index.html', (err, data) => {
    res.writeHead(200,{'Content-type': 'text/html'})
    res.write(data)
    return res.end()
  })
} else {

  const nameNewLine = name + ',\r\n'



  fs.appendFile('texto.txt', nameNewLine, () => {
    res.writeHead(302, {
      location: '/'
    })
    res.end()
  })
}
})


server.listen(port,() => {
  console.log('Servidor on',port)
})
