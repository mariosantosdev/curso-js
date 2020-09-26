/*
    Aula 3 para ver arrow functions
    ES2015 (ES6)
*/
let matchWithThis = function(param){
    console.log(this == param);
}
let matchArrowWithThis = param => console.log(this == param);

matchArrowWithThis(module.exports)
matchWithThis(global)

const obj = {}
matchArrowWithThis = matchArrowWithThis.bind(obj)
matchWithThis = matchWithThis.bind(obj)

matchArrowWithThis(obj) // Verifica se o parametro passado é o this
matchWithThis(obj) // Verifica se o parametro passado é o this