const x = 10
const y = 'kaike'
const z = [1,2]

console.log(x, y, z)

// contagem de impressoes

console.count(`o valor de x e: ${x}, contagem`)
console.count(`o valor de x e: ${x}, contagem`)
console.count(`o valor de x e: ${x}, contagem`)
console.count(`o valor de x e: ${x}, contagem`)

// variavel entre string

console.log('o nome e %s, ele e programador', y)

// limpar console

setTimeout(() => {
  console.clear()
} ,2000)