const x = '10'

if(!Number.isInteger(x)){
  throw new Erro('x nao e um numero')
}

console.log('Continua o codigo')