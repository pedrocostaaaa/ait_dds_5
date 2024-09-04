'use strict';

function turma(turma) {
const turma = new Date(turma);
const turma = turma.toLocaleTimeString('pt-br',{hour:'2-digit',minute:'2-digit' });
}

export default abreviahora;