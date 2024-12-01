const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question('quantos anos voce tem?', (teste) => {

  console.log(`A minha linguagem preferida e ${teste}`)
  readline.close()
} )