import fs from 'fs'

fs.unlink('texto.txt', (err) => {
   if(err){
    console.log('Arquivo nao encotrado')
   } else {
    console.log('Arquivo excluido com sucessor')
   }
})