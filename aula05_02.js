/*
    Aula 2 para ver arrow functions
    ES2015 (ES6)
*/

function Person() {
    this.idade = 0;

    setInterval(() => {
        this.idade++
        console.log(this.idade);
    }, 1000)
}

new Person