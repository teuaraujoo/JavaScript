function esperaAi(msg, tempo) {
    // encapsulamento do código em uma promise
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            // reject -> caso dê errado
            // reject('BAD VALUE');
            reject(new TypeError('NUMERO'));
        }

        setTimeout(() => {
            // resolve -> caso der certo
            resolve(msg);
        }, tempo)
    });
};

function numAleatorio(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

const promises = [
    esperaAi('promise 1', numAleatorio(1, 3)),
    esperaAi('promise2', numAleatorio(1, 3)),
    esperaAi('333', numAleatorio(1, 5)),
];

Promise.race(promises).then(resp => {
    console.log(resp);
}).catch(error => {
    console.log(error.message);
})