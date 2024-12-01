const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('Qual e sia linguagem preferida: ',

  (language) => {
    if (language === 'pyton') {
      console.log(`a minha linguagem preferida e ${language}`)
    } else {
      console.log('isso nem e linguagem')
    }

    close.readline
  })

