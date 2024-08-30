'use strict';

let municipios = ['Serra', 'Cariacíca', 'Vila-Velha', 'Viana', 'Vitória', 'Guarapari'];

console.log(municipios[0].toUpperCase());

console.log(municipios);

// removendo 2 elementos a partir do elemento 1
municipios.splice(0,1);
console.log(municipios);

// removendo 2 elementos no final.
municipios.splice(municipios.length-1,1);
console.log(municipios);


// para juntar um array usamos o join e podemos definir um separador.
let texto = municipios.join('-');
console.log(texto);