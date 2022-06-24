class Pessoa {
    id: number
    nome: string
    fone: number
    email: string
    peso: number
    altura: number


    constructor(id:number, nome:string, fone:number, email:string, peso:number, altura:number) {
        this.id = id
        this.nome = nome
        this.fone = fone
        this.email = email
        this.peso = peso
        this.altura = altura
        
    }

      imc(): number {
          return this.peso / (this.altura * this.altura )
      }

    imprimeDados(): void {
        console.log(`ID: ${this.id}`)
        console.log(`Nome: ${this.nome}`)
        console.log(`Telefone: ${this.fone}`)
        console.log(`Email: ${this.email}`)
        console.log(`Peso: ${this.peso}`)
        console.log(`altura: ${this.altura}`)
    }

}

export default Pessoa