import chalk from 'chalk'
import inquirer from 'inquirer'
  
inquirer.prompt([
  {
    name: 'nome',
    message: 'Digite seu nome:'
  },
  {
    name: 'idade',
    message: 'Digite sua idade:'
  }
]).then((answers) =>{
  if (!answers.nome || !answers.idade ){
    throw new Error('Por favor e nessesario adicionar nome e idade')
  }
  console.log(chalk.bgYellow.black(`Seu nome e ${answers.nome} e voce tem ${answers.idade} anos`))
}).catch((err) => console.log(err))

