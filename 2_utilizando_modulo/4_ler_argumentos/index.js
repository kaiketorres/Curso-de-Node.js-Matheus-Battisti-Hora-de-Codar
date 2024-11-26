console.log(process.argv)

const argv = process.argv.slice(2)

console.log(argv)

const nome = argv[0].split('=')[1]


const idade = argv[1].split('=')[1]

console.log(`O nome dele(a) e ${nome} e ele(a) tem ${idade}`)