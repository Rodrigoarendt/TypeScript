interface IFornecedor {
    id: number
    nome: string
    email: string
    fone: string
    cpf:(string | number)
}

var fornecedor: IFornecedor = {id:0,nome:'',email:'',fone:'',cpf:''}

fornecedor.id = 10
fornecedor.nome = ''
fornecedor.email = 'pinguim@gmail.com'
fornecedor.fone = '545030'
fornecedor.cpf = '212505051120'

console.log(fornecedor)