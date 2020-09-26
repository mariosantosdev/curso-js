/*
    Aula 1 para ver classes do ES2015
*/

class Lancamento {
    constructor(nome = 'Generio', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 1820)
const contaLuz = new Lancamento('Luz', -370)

const contas = new CicloFinanceiro(9, 2020)
contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario());