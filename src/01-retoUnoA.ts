var readline = require('readline');

var rl = readline.createInterface(
		process.stdin, process.stdout);

rl.setPrompt(`cual es su edad? `);
rl.prompt();
rl.on('line', (age) => {
  let parce = parseInt(age);
	console.log(`su edad es: `, parce);
	rl.close();
  if (parce > 18){
    console.log('usted puede manejar');
  }else{
    console.log('usted no cumple con la edad recomendada');
  }
});
