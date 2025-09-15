//const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 7: Filtra nombres que empiecen con la letra 'A'
// Dada una lista de nombres ['Ana', 'Luis', 'Andrea', 'María'], queremos quedarnos solo con los nombres que comiencen con la letra 'A'. Por ejemplo, el nombre 'Luis' no debería estar en el resultado porque empieza con 'L'.

let nombres = ['Ana', 'Luis', 'Andrea', 'María'];

let empiezaConA = nombres.filter((nombre) => {
    return nombre.startsWith("A");
})

console.log(empiezaConA);

// Nota: Con total sinceridad Profe, no tenia idea de como hacerlo, por eso busque en internet si habia alguna forma de poner "empieza con" y me salio el startWith... luego descubri investigando mas que se puede hacer indicando asi nombre[0] === 'A', pero ya que busque me gusto mas startsWith. :) 

