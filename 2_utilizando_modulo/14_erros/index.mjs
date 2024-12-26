import inquirer from 'inquirer'
import chalk from 'chalk'
import fs from 'fs'

const usuarios = [{
  usuario: [],
  saldo: []
}]

operation()

function operation() {
  inquirer.prompt([{
    type: 'list',
    name: 'action',
    message: 'O que voce deseja fazer?',
    choices: [
      'Criar conta',
      'Consultar saldo',
      'Depositar',
      'Sacar',
      'Sair'
    ]
  }]).then((anwser) => {
    const action = anwser['action']

    if(action === 'Criar conta'){
      inquirer.prompt([{
        name: 'name',
        message: 'Digite um nome para sua conta:'
       }]).then((anwser) => {
        console.log(`Bem vindo ${anwser.name}`)
        usuarios[0].usuario.push(anwser.name)
        operation()
       })  
    } else if(action === 'Consultar saldo'){
       inquirer.prompt([{
        name: 'nameSaldo',
        message: 'Digite seu nome:'
       }]).then((anwser) => {
        if(usuarios[0].usuario.includes(anwser.nameSaldo)){
          console.log('foi porrra')
        }
        operation()
       })
    }


  })
  .catch(err => {console.log(err)})
}