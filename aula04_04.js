/*
    Aula para ver o operador destructuring de um array em parametros de uma funcao
    ES2015 (ES6)
*/

function rand([min = 0, max = 100]) {
    if(min < max) [min, max] = [max, min] // Inverte o valor maximo e minimo

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 30]));
console.log(rand([0, 20]));
console.log(rand([, 90]));