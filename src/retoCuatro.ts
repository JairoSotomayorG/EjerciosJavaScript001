var scanf = require('scanf');

console.log('Diguite la nota optenida ');
var nota = scanf('%f');

  if (nota >= 0.0 && nota <= 3.0){
    console.log('la nota es Muy Deficiente');
  }

  if (nota > 3.0 && nota <= 5.0){
    console.log('la nota es Muy Deficiente');
  }

  if (nota > 5.0 && nota <= 6.0){
    console.log('la nota es Suficiente');
  }

  if (nota > 6.0 && nota <= 7.0){
    console.log('la nota es Bien');
  }

  if (nota > 7.0 && nota <= 9.0){
    console.log('la nota es Muy Notable');
  }

  if (nota > 9.0 && nota <= 10){
    console.log('la nota es Sobresaliente');
  }
