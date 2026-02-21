function numAleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(new TypeError('CAI NO ERRO: NUMERO')); 
        }

        setTimeout(() => {
            resolve(msg);
        }, tempo)
    });
};

async function executa() {

    try {
        const  f1 = await esperaAi('fase1', numAleatorio(1, 3));
        console.log(f1);
        const  f2 = await esperaAi(333, numAleatorio(1, 3));
        console.log(f2);
        const  f3 = await esperaAi('fase3', numAleatorio(1, 3));
        console.log(f3);
        console.log('terminamos aqui');
    } catch(e) {
        console.error(e.message);
    }
}

executa();
// 3 estados das promises:

// pending: estado inicial, nem cumprido nem rejeitado.
// fulfilled: significa que a operação foi concluída com sucesso.
// rejected: significa que a operação falhou.