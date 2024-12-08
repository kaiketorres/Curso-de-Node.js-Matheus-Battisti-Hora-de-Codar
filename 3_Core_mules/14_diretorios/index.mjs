import fs from 'fs'

if(!fs.existsSync('./minhapasta')){
  console.log('Nao existe')
  fs.mkdirSync('minhapasta')
} else {
  
  console.log('A pasta existe')
}


