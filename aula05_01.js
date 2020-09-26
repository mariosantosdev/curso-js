/*
    Aula 1 para ver arrow functions
    ES2015 (ES6)
*/

let dobro = function(a) { // Syntax de funcao normal
    return 2 * a
}

dobro = (a) => { // Syntax de array function
    return 2 * a
}

dobro = a => 2 * a // Syntax de array function em 1 linha

console.log(dobro(Math.PI));