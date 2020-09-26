/*
    Aula para ver o par `chave/valor` de um `objeto`
*/

const word = 'Hello' // Chave -> `word` | Valor -> `Hello`

function Saudation() {
    const word = 'World' // Chave -> `word` | Valor -> `World`
    return word
}

// Objetos sao grupos aninhados de pares chave/valor
const dev = {
    name: 'Mário',
    age: 17,
    weight: undefined,
    address: undefined
}

console.log(word);
console.log(Saudation());
console.log(word, Saudation());
console.log(dev);