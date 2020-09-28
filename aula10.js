/*
    ** Aula retirada o curso de typescript **
    Operador Destructuring
*/

/* PARTE 01 -> ARRAY */
const caracters = ['Volvo', 'x60']
console.log(caracters)

const [marca, modelo] = caracters
/*
    Pode ser substituido por ...
    const marca = caracters[0]
    const modelo = caracters[1]
*/
console.log(`Marca: ${marca}, Modelo: ${modelo}\n`)

/* PARTE 02 -> OBJETO */
const empresa = {
    nome: 'Fantasma',
    CEO: 'Mario',
    fundacao: 2020,
    funcionarios: {
        quantidade: 2,
        nomes: ['kevin', 'daniel']
    }
}
const { nome, CEO: dono, fundacao, funcionarios: { quantidade } } = empresa
console.log(`${dono} fundou a empresa ${nome} em ${fundacao}, e tem ${quantidade} funcionarios.`)