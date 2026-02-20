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

function baixarPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return Promise.reject('Página fora do cache');
    }
}

baixarPagina().then(dados => console.log(dados)).catch(e => console.log('ERROR:', e));