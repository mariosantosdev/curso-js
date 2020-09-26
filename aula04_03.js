/*
    Aula para ver o operador destructuring de um objeto em parametros de uma funcao
    ES2015 (ES6)
*/

function rand({ min = 0, max = 100 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { min: 0, max: 50 }

console.log(rand(obj));
console.log(rand({ min: 90 }));
console.log(rand({}));