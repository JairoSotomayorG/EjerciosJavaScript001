var readline = require('readline');

var rl = readline.createInterface(
		process.stdin, process.stdout);

rl.setPrompt(`cual es su personaje favorito? `);
rl.prompt();
rl.on('line', (peronaje) => {
  const parce = peronaje;
	console.log(`el perosnaje escogido es : `, parce);
	rl.close();

  let heroes: (string)[] = [
    "Rhaenerya",
    "Daemon",
    "Viserys",
    "Alicent"
  ];

  console.log('Los heroes son: ', heroes);

  const seleccion = parce.toString() ;

  let busquedaBuena: boolean = false

  for(let i = 0 ; i < heroes.length ; i++){
    let numero = i + 1;
    if (seleccion == heroes[i]){
      busquedaBuena = true
      console.log('el personaje escogido es: ', numero , seleccion);
    }
  }
  if (busquedaBuena == false){
    console.log('No escogio un personaje de la lista')
  }

});


