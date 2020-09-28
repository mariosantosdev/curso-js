/*
    ** Aula retirada o curso de typescript **
    Promises
*/

function wait3sPromise(valor = 0) {
    return new Promise((resolve, reject) => {
        if(valor != 0){
            setTimeout(() => {
                resolve(`Valor retornado, depois de ${valor} milisegundos`)
            }, valor)
        }else{
            reject('Deve colocar um valor de milisegundos')
        }
    })
}

wait3sPromise(1000)
    .then(result => console.log(result))
    .catch(err => console.log(err))
