"use strict";
class Pessoa {
    constructor() {
        this.nome = '';
        this.identificador = 0;
    }
    setIdentificador(id) {
        this.identificador = id;
    }
}
let pessoa;
pessoa = new Pessoa();
pessoa.nome = 'Jose da Silva';
pessoa.setIdentificador(1000);
console.log(pessoa);
class Aluno extends Pessoa {
    constructor() {
        super(...arguments);
        this.media = 0;
    }
    setIdade(idade) {
    }
}
let aluno = new Aluno();
aluno.media = 10;
aluno.setIdentificador(123);
aluno.setIdade(15);
console.log(aluno);
