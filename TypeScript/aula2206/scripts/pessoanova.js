"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(id, nome, fone, email, peso, altura) {
        this.id = id;
        this.nome = nome;
        this.fone = fone;
        this.email = email;
        this.peso = peso;
        this.altura = altura;
    }
    imc() {
        return this.peso / (this.altura * this.altura);
    }
    imprimeDados() {
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Telefone: ${this.fone}`);
        console.log(`Email: ${this.email}`);
        console.log(`Peso: ${this.peso}`);
        console.log(`altura: ${this.altura}`);
    }
}
exports.default = Pessoa;
