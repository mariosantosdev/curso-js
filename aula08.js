/*
    Aula para ver arrays
*/

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados, '\n');

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3], '\n') // Reporna undefined

aprovados[3] = 'Mario'
aprovados.push('Junio')
console.log(aprovados[3])
console.log(aprovados[4])
console.log(aprovados.length, '\n')

aprovados[9] = 'Daniel'
console.log(aprovados, '\n')

aprovados.sort()
console.log(aprovados, '\n')

delete aprovados[1]
console.log(aprovados, '\n')

aprovados = ['Ana', 'Carlos', 'Junio']
aprovados.splice(1, 2, 'Mario') // A partir doo elemento 1, ele vai remover dois elementos e adicionar o elemento 'Mario'
console.log(aprovados);