'use strict';

import abreviahora from "./abreviahora.js";
import abreviaUC from "./AbreviaUC.js";
import turma from "./turma.js";

let aulas = [
    {
        "id": 1300,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "EMP-NBM-03",
        "instrutor": "JOEL HERBERT BARBOSA SILVA",
        "unidade_curricular": "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
        "ambiente": "VTRIA-3-SALA-3004",
        "chave": null
    },
    {
        "id": 1280,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "UMO-MBMM-03",
        "instrutor": "THADEU VASCONCELOS DA SILVA GOMES",
        "unidade_curricular": "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
        "ambiente": "VTRIA-EXTER-EXTERNO",
        "chave": null
    },
    {
        "id": 1326,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:30:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "HTC-MEC-4-92",
        "instrutor": "AFONSO DE JESUS CORDEIRO",
        "unidade_curricular": "DESENVOLVIMENTO DE SISTEMAS DE AUTOMAÇÃO MECÂNICA (CH: 100.0000)",
        "ambiente": "VTRIA-3-LAB-3003",
        "chave": null
    }
];

const tabela_aulas = document.getElementById('tabela_aulas');

// console.log (tabela_aulas);

let linhas = '';

for (let aula of aulas) {
    linhas += '<tr>';
    linhas += '<td>'+abreviahora(aula.data_hora_inicio)+'</td>';
    linhas += '<td>'+abreviahora(aula.data_hora_fim)+'</td>';
    linhas += '</tr>';
};

tabela_aulas.innerHTML += linhas;

for (let aula of aulas) {
    linhas += '<tr>';
    linhas += '<td>'+abreviaUC(aula.unidade_curricular)+'</td>';
    linhas += '</tr>';
};