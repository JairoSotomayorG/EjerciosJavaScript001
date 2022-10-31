( () => {
var scanf = require('scanf');

let arreglo: (string)[]=[];
let salir: number = 0;

for(let i = 0 ; salir < 2 ; i++){

  console.log('Diguite un dato para llenar el array ');
  var dato = scanf('%s');

  let consolidacion: string = dato

  if ( consolidacion == 'cancelar' ){
  salir = 2
}else{
  arreglo.push(dato);
  }
}

console.log('el array digitado es: ', arreglo);
})();
