//const prompt = require("prompt-sync")({ sigint: true });

// Encuentra la película más corta y analiza los títulos largos Supón que tienes una lista de películas con su duración en minutos:
// const movies = [
// { title: 'El Señor de los Anillos', duration: 200 },
// { title: 'Inception', duration: 148 },
// { title: 'Matrix', duration: 136 },
// { title: 'Toy Story', duration: 81 },
// { title: 'Coco', duration: 105 }
// ];

// Queremos
// Encontrar la película más corta en duración. 
// De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10 caracteres. 
// Crear una lista de los títulos largos en minúsculas. 
// Imprime en la consola:
// El título de la película más corta.
// La lista de títulos largos en minúsculas

const movies = [
{ title: 'El Señor de los Anillos', duration: 200 },
{ title: 'Inception', duration: 148 },
{ title: 'Matrix', duration: 136 },
{ title: 'Toy Story', duration: 81 },
{ title: 'Coco', duration: 105 }
 ];

 let peliCorta = movies.find (movies => movies.duration < 100);

 console.log (peliCorta);

 let peliRestantes = movies.filter ( peli => peli.title !== peliCorta.title);

 let peliLargos = peliRestantes.filter(peli => peli.title.length > 10);

 let titulosMinuscula = peliLargos.map(peli => peli.title.toLowerCase());


console.log (" La pelicula de la lista mas corta es:" + " " + peliCorta.title);
console.log ("El titulo mas largo es" + " " + titulosMinuscula);