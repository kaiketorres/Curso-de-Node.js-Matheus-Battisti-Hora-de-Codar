import http from 'http'
import fs from 'fs'
import url from 'url'

const port = 3000

const server = http.createServer((req, res) => {

  const q = url.parse(req.url, true)
  const filename = q.pathname.substring(1)

  if (filename.includes('html')) {
    if (fs.existsSync(filename)) {
      fs.readFile(filename, (err, data) => {
        res.writeHead(200, { 'Contenty-Type': 'text/html' })
        res.write(data)
        res.end()
      })
    } 
  } else {
    fs.readFile('404.html', (err, data) => {
      res.writeHead(404,{'Contenty-Type':'text/html'})
      res.write(data)
      res.end()
    })
  }
}
)

server.listen(port, () => {
  console.log('Server on', port)
})