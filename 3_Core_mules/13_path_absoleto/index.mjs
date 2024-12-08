import path from 'path'

console.log(path.resolve('teste.txt'))

const midFolder = 'relatorios'
const fileName = 'matheus.txt'

const fialPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(fialPath)