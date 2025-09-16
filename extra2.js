//const prompt = require("prompt-sync")({ sigint: true });

// Calcula el total de ventas de productos seleccionados Supón que tienes una lista de productos con sus precios en formato de objeto:
// const products = [
// { name: 'Laptop', price: 1000 },
// { name: 'Mouse', price: 25 },
// { name: 'Teclado', price: 50 },
// { name: 'Monitor', price: 200 },
// { name: 'Audífonos', price: 75 }
// ];
// Queremos:
// Seleccionar los productos cuyo precio sea mayor o igual a 50.
// Obtener solo los nombres de esos productos.
// Calcular el precio total sumando los precios de los productos seleccionados.
// Imprime el total y los nombres de los productos seleccionados en la consola.


const productos = [
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'Audífonos', precio: 75 }
];


let precios = productos.filter(productos => productos.precio >= 50);

let nombre= precios.map (productos => productos.nombre);


let suma = precios.reduce ( function (acum, productos) {
    return acum + productos.precio
}, 0);



console.log("lo que usted ha comprado es:" + " " + nombre);
console.log ("El total de su compra fue:" + " " + suma);

