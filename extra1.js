//const prompt = require("prompt-sync")({ sigint: true });


// Encuentra los nombres más cortos y transforma su formato 

// Tienes una lista de nombres de personas: ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo']. Queremos realizar varias tareas con esta lista:
// Primero, filtra los nombres que tengan menos de 5 letras.
// Luego, transforma los nombres resultantes para que estén en mayúsculas.
// Finalmente, construye una frase que diga: "Los nombres seleccionados son: [nombres]", donde [nombres] sea la lista resultante unida por comas.
// Al final, imprime la frase en la consola.


let lista = [
    'Lucía',
    'Ana',
    'María',
    'Luis',
    'José',
    'Pablo'
]

let nombres = lista.filter(function (nombre){
    return nombre.length < 5 
})

console.log(nombres)

let nombresElegidos = nombres.join (" , "); 

let nombreMayuscula = nombresElegidos.toUpperCase();

console.log( "los nombres seleccionados son:" + " " + nombreMayuscula); 

