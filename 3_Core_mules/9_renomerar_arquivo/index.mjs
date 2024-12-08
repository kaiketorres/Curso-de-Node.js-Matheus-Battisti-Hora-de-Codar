import fs from 'fs'

fs.rename('arquivo.txt', 'novoarquivo.txt', (err) => {
 if(err){
  console.log('Arquivo nao encontrado')
 } else {
  console.log('Arquivo renomeado')
 }
})