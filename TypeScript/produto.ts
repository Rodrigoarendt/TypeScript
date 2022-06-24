class produto {
    descricao: string
    valorUnitario: number
    QtdeEstoque: number

    constructor(descricao: string, valorUnitario: number, QtdeEstoque:number ){
        this.descricao = descricao
        this.valorUnitario = valorUnitario
        this.QtdeEstoque
    }

  getEstoques(): void {
      console.log(`Sua quantidade em estoque é: ${this.QtdeEstoque}`)
  }

  precoComdesconto(taxa:number): number{
      let preco:number = (taxa * this.valorUnitario)
      return (preco)
  }
 
  precoComaAcrescimo(taxa:number): number {
     let preco:number = (this.valorUnitario * taxa / 100)
     return (preco)
  }


}

export default produto
