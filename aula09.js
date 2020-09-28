/*
    ** Aula retirada o curso de typescript **
    Operador Spread & Rest
*/

/* PARTE 01 -> Spread */
const numbers = [1, 10, 99, -5]
console.log(Math.max(...numbers)) // Se nao utilizasse spread `...` seria usado `numbers[0], numbers[1], numbers[2], numbers[3]`

const turmaA = ['Joao', 'Maria', 'Fernando']
const escola = ['Mario', 'Ana', ...turmaA] // Separa todos os elementos da turmaA
console.log(escola)

/* PARTE 02 -> Rest */
function retornaArray(...args){ // Pode ser passado quantos parametros quisermos
    console.log(args);
}

retornaArray(1, 2, 9)

/* PARTE 03 -> Usando em tuplas */
const tupla = [1, 'abc', false]

function tuplaParam1(a, b, c){
    console.log(`1) ${a}, ${b}, ${c}`);
}

function tuplaParam2(...params) {
    console.log(`2) ${params[0]}, ${params[1]}, ${params[2]}`);
}

tuplaParam1(...tupla)
tuplaParam2(...tupla)