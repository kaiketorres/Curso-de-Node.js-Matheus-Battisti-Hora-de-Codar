const argv = process.argv.slice(2)

const nome = argv[0].split('=')[1]
const idade = argv[1].split('=')[1]

console.log(nome, idade)