class Animais{
    especie: string
    tipo: string
    caracteristicas: string

    constructor(especie:string, tipo:string, caracteristicas:string ){
        this.especie = especie
        this.tipo = tipo
        this.caracteristicas = caracteristicas
    }

}

class Aves extends Animais{
    descricao: string = ''
    constructor(especie:string, descricao:string,caracteristicas:string, 
        tipo:string){
        super(especie,tipo,caracteristicas,)
        this.descricao = descricao
    }
}

let ave: Aves
ave = new Aves('Seriemas', 'cinza','Alta de Pernas Longas','1')
ave.descricao = 'Natural do Ceara'
console.log(ave)