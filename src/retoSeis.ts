( () => {
var scanf = require('scanf');

let arreglo: (number)[]=[];
let salir: number = 0;

for(let i = 0 ; salir < 2 ; i++){

  console.log('Diguite un numero para llenar el array ');
  var dato = scanf('%s');

      let consolidacion: string = dato
      if ( consolidacion == 'cancelar' ){
        salir = 2
        }

      let numeroInt: number = parseInt(dato)

        if (isNaN(numeroInt)){
          console.log('no es un numero; Digite un numero')
        }else{
            if ( consolidacion == 'cancelar' ){
            salir = 2
            }else{
            arreglo.push(numeroInt);
            }
          }
}
console.log('el array digitado es: ', arreglo);

})();
