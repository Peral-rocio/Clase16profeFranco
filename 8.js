//const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 8: Busca un nombre específico
// Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo.

const nombres = [
    'Carlos', 
    'Daniel',
     'Laura',
      'Ana'
    ]

const buscarnombre= nombres.find((nombre) => {
    return nombre === "Laura"
});

console.log(buscarnombre);