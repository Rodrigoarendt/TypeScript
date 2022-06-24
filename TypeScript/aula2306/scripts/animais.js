"use strict";
class Animais {
    constructor(especie, tipo, caracteristicas) {
        this.especie = especie;
        this.tipo = tipo;
        this.caracteristicas = caracteristicas;
    }
}
class Aves extends Animais {
    constructor(especie, descricao, caracteristicas, tipo) {
        super(especie, tipo, caracteristicas);
        this.descricao = '';
        this.descricao = descricao;
    }
}
let ave;
ave = new Aves('Seriemas', 'cinza', 'Alta de Pernas Longas', '1');
ave.descricao = 'Natural do Ceara';
console.log(ave);
