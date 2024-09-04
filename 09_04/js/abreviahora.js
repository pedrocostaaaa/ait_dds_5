'use strict';

function abreviahora(dataHora) {
const data = new Date(dataHora);
const hora = data.toLocaleTimeString('pt-br',{hour:'2-digit',minute:'2-digit' });
    return hora;
}

export default abreviahora;