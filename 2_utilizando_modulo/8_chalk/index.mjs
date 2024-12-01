import chalk from 'chalk';

const nota = 4



if(nota >= 7){
  console.log(chalk.green('Parabens voce esta aprovado!'))
} else {
  console.log(chalk.bgRed.black('Voce precisa fazer a prova de recuperacao'))
}