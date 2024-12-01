const inquirer = require('inquirer')

inquirer.prompt([{
  name: 'p1', 
  message: 'Qual a primiera nota?'
},{
  name: 'p2',
  message: 'Qual a segunda nota?'
}])
.then((answers) =>{
  console.log(answers)
  const media = ((parseInt(answers.p1) + parseInt(answers.p2))/ 2)
  console.log(answers.p1)
})
.catch((err) => console.log(err))