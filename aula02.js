/*
    Aula para ver a diferença entre `funções` e `objetos`
*/

console.log(typeof Object, typeof new Object); // Retorna uma função | Retorna um objeto

const User = function () {}
console.log(typeof User, typeof new User()); // Retorna uma função | Retorna um objeto

class Product{} // ES2015 (ES6)
console.log(typeof Product, typeof new Product()); // Retorna uma função | Retorna um objeto