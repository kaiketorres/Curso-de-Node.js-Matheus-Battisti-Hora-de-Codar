import minimist from 'minimist';
import meuModulo from "./meuModulo.mjs"
const argv = minimist(process.argv.slice(2))

const a = argv['a']
const b = argv['b']

meuModulo(a,b)

