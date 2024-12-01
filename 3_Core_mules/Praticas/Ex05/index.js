const minimist = require('minimist')

const argv = minimist(process.argv.slice(2))

const nome = argv['nome']
const idade = argv['idade']

console.log(nome, idade)