import chalk from 'chalk';

const n = 3

if(n === 2){
  console.log(chalk.green('o numero e 2'))
} else {
  console.log(chalk.bgRed.black('o numero nao e 2'))
}