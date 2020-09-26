/*
    Aula para mostrar a diferença entre os tipos de variaveis `var`, `let` e `const`
*/

var a = 3; // Variavies `var` podem ser declaradas novamente no mesmo escopo e podem ter o valor alterado
let b = 4; // Variaveis `let` NÃO podem ser declaradas novamente no mesmo escopo mas podem ter o valor alterado
const c = 5; // Variaveis `const` NÃO ser declaradas novamente no mesmo escopo e NÃO podem ter o valor alterado

var a = 30;
b = 40;
console.log(a ,b);

a = 300
b = 400

console.log(a, b);

// c = 50 -> [GERA UM ERRO]
console.log(c);