/*
    Aula para ver o operador destructuring em um array
    ES2015 (ES6)
*/

const [a] = [10]
console.log(a);

const [n1, , n3, n4 = 'indefinido'] = [3.14, 25, 90]
console.log(n1, n3, n4);

const [, [, nota]] = [[, 8, 8], [9, 7, 6]]
console.log(nota);