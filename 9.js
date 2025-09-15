//const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabras
// Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. Queremos saber cuántas letras hay en total entre todas las palabras. Por ejemplo, 'sol' tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. La suma total debería ser 15.

let palabras = [
    "sol", // 3
    "estrella", //8
    "nube",//4
    "luna",//4
    "cielo", //5
] //deberia darme : 24

let contar = palabras.reduce((acumulador, palabra) => {
    return acumulador + palabra.length
} , 0);

console.log(contar);