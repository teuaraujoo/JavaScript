function criarConta(){

    let saldo = 0;

    return {
        depositar(valor){
            return saldo += valor;
        },
        sacar(valor){
            return saldo >= valor ? saldo -= valor : 'saldo negativo';
        },
        verSaldo(valor){
            return saldo;
        }
    };
};

const operacoes = criarConta();

console.log(operacoes.depositar(200));
console.log(operacoes.sacar(100));
console.log(operacoes.verSaldo(200));

