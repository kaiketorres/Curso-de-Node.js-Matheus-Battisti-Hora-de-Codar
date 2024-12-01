import fs from 'fs'

console.log('Inicio')

fs.writeFile('arquivo.txt', 'oi', function(){
  setTimeout(function(){
    console.log('Arquivo criado!')
  }, 1000)
})