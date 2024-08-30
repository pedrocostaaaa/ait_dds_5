'use strict';

const ambientes = [
    'VTRIA-3-SALA-3004',
    'VTRIA-EXTER-EXTERNO',
    'VTRIA-5-LAB-5002',
];


function obterDoisUltimosNomes(strict) {
    const partes = strict.split('-');
    return partes.splice(-2, 2).join('-');
};


const doisUltimosNomes = new Array(ambientes.length);


for (let i = 0; i < ambientes.length; i++) {
    const ambiente = ambientes[i];
    doisUltimosNomes[i] = obterDoisUltimosNomes(ambiente);
};

console.log(doisUltimosNomes);