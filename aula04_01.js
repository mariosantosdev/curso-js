/*
    Aula para ver o operador destructuring em um objeto
    ES2015 (ES6)
*/

const dev = {
    name: 'Mário',
    age: 17,
    weight: undefined,
    address: {
        road: undefined,
        number: 22
    },
}

const { name, age } = dev
console.log(`Extracted name of object dev: ${name}`);
console.log(`Extracted age of object dev: ${age}`);

const { name: n, age: a } = dev
console.log(n, a);

const { onDev = false } = dev // Caso nao existir uma chave/valor, podemos definir um valor padrao
console.log(onDev);

const { address: {road, number} } = dev
console.log(road, number);