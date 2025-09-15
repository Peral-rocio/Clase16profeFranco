//const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 4: Calcula la suma total de los números
// Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de sumarlos todos juntos. Es decir, deberías obtener 1 + 2 + 3 + 4. Al finalizar, imprime el total en la consola.


const numeros = [ 1, 2, 3, 4, 10, 23] // tiene que dar esto segun mis calculos :  43 

const suma = numeros.reduce ((a, b) => a + b);

console.log (suma);