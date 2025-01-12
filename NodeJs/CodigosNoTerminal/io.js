const process = require('process');



process.stdin.on('data', (keyboard) =>{
  console.log('Digite seu nome:')
  process.stdout.write(`Texto do usuario:? ${keyboard}`);

  process.exit()
})