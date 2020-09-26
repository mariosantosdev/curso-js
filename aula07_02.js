/*
    Aula 2 para ver classes do ES2015
*/

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Desenvolvedor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Santos')
    }
}

const filho = new Filho
console.log(filho);