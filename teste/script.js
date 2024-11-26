const controlador = 0

const usuarios = []

do {

  const cadastro = parseInt(prompt(' 1 - Cadastrar Novo Usuario\n 2 - Despositar Dinheiro \n 3 - Sacar Dinheiro \n 4 - Exibir Saldo \n 5 - Sair '
  ))

  if (cadastro === 1) {

    let NovoUsuario = prompt('Digite seu nome para criar uma conta:')

    usuarios.push({ nome: NovoUsuario, dinheiroBanco: 0 })


  } else if (cadastro === 2) {

    let UsuarioDeposito = prompt('Digite seu nome para depositar seu dinheiro:')

    const usuarioEncontrado = usuarios.find(obj => obj.nome === UsuarioDeposito)

    if (usuarioEncontrado) {

      let quantDepositar = Number(prompt('Digite a quantidade que voce deseja depositar:'))

      if (quantDepositar > 0) {
        usuarioEncontrado.dinheiroBanco += quantDepositar;
      } else {
        alert('Valor invalido')
      }
    } else (
      alert('Usuario Nao cadastrado!!!')
    )
  } else if (cadastro === 3) {
    
    let quantSacar = Number(prompt('Digite a quantidade que deseja sacar:'))
    const usuarioEncontrado = usuarios.find(obj => obj.nome === UsuarioDeposito)


    usuarioEncontrado.dinheiroBanco = quantSacar


  }
} while (controlador === 0)