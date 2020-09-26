/*
    Aula para ver anon functions
    ES2015 (ES6)
*/

const soma = function (x, y) {
    return x + y
}

const print = function (a, b, operation = soma) {
    console.log(operation(a, b));
}

print(1, 7)
print(12, 3, (a, b) => a - b)
print(3.141592, 6, function (x, y) {
    return x * y
})