// ECMASCRIPT 6
// :: TEMPLATES LITERALES ::
let nombre = 'Juan';
let apellido = 'Pérez';
let edad = 30;

function getEdad() {
  return 40;
}

let texto =
  'HOLA SOY ' + nombre + ' ' + apellido + ' y tengo ' + edad + ' años';

let texto2 = `HOLA SOY ${nombre} ${apellido} y tengo ${getEdad()} años`;

console.log(texto);
console.log(texto2);

// :: DESESTRUCTURACION ::
let persona = {
  nombre: 'Juan',
  apellido: 'Pérez',
  edad: 30,
  casa: {
    calle: 'Calle 123',
    ciudad: 'Madrid',
  },
};
// const nombre = persona.nombre;
const { nombre: nombre2 } = persona;
console.log(nombre2);

// const ciudad = persona.casa.ciudad;
const {
  casa: { ciudad: ciudad2 },
} = persona;
console.log(ciudad);

// :: ARROW FUNCTIONS ::
function sumar(a, b) {
  setTimeout(() => {
    return a + b;
  }, 1000);
}

console.log(sumar(1, 2));

const sumar2 = (a, b) => {
  return a + b;
};

// :: PROMESAS ::
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Hola');
    reject('Error 404');
  }, 5000);
});

promesa
  .then((resultado) => {
    console.log('OK', resultado);
  })
  .catch((error) => {
    console.error('ERROR', error);
  });

// ECMASCRIPT 7
// :: IMPORTS ::
// import { suma } from './suma.js';

// :: INCLUDES ::
let array = [1, 2, 3, 4, 5];
let existe = array.includes(3);
console.log(existe);

// ECMASCRIPT 8
// :: ASYNC AWAIT ::

// ECMASCRIPT 9
// :: PROMISE.FINALLY
promesa
  .then((resultado) => {
    console.log('OK', resultado);
  })
  .catch((error) => {
    console.error('ERROR', error);
  })
  .finally(() => {
    console.log('FIN');
  });

// ECMASCRIPT 10
// :: TRIM START
let texto3 = '   Hola   ';
console.log(texto3.trimStart());

// :: TRIM END
let texto4 = '   Hola   ';
console.log(texto4.trimEnd());
