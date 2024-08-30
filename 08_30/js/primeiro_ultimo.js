'use strict'; // impede o uso de variáveis não declaradas.

let nome = 'Joao';

let sobrenome = 'Costa';

console.log(sobrenome);

const instrutor = 'EDUARDO LUIZ FERREIA PIETRA LOPES DE MEDEIROS';

const pieces = instrutor.split(' ');
// split separa uma string em um array de strings com o separador escolhido.
console.log(pieces);

console.log(pieces[0], pieces.pop());
//pop remove e retorna o último elemento.

let array = [1, 2, 3, 4, 5, 6];
console.log(array);
let numero = array.pop();

console.log(numero);
console.log(array);

array.push(7);
//push empurra ao final do array.
console.log(array);


//shift remove e retorna o primeiro.
console.log(array.shift());
console.log(array);

//unshift adiciona na primeira posição.
array.unshift(0);
console.log(array);

let cores = ['verde', 'azul', 'roxo', 'vermelho', 'rosa'];

for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}

console.log('For simplificado');

for (let cor of cores) {
    console.log(cor);
}