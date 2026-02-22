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

// chama a função espera ai, passando os 2 parâmetros
esperaAi('ola1', numAleatorio(1, 3))
    // 1° resposta
    .then(resposta => {
        // loga a resposta
        console.log(resposta);
        // chama a funcao novamente
        return esperaAi('ola2', numAleatorio(1, 3));
    })
    // 2° resposta
    .then(resposta => {
        // loga a resposta
        console.log(resposta);
        // chama a função novamnete porem coloca um dos parametros como número
        return esperaAi(3333, numAleatorio(1, 3));
    })
    // 3° resposta
    .then((resposta) => {
        // loga a resposta, o que nao acontece porque é um número, logo, passa direto para o catch e encerra a execução no catch
        console.log(resposta);
    })
    // pega o erro
    .catch((e) => {
        // loga o erro e encerra a execução
        console.log('Error', e.message);
    })
    .then(() => {
        console.log('encadeando depois do catch');
    })

// esse log é executado 1° pois o outro código é executado em paralelo
console.log('O outro código é executado em paralelo!');

// 3 estados de promises
// pending: estado inicial, nem cumprido nem rejeitado.
// fulfilled: significa que a operação foi concluída com sucesso.
// rejected: significa que a operação falhou.