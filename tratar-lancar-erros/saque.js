function withdraw(balance, value){

    if (value > balance){
        throw new RangeError('Saldo Insuficiente!');
    };

    if (Math.sign(value) === -1){
        throw new TypeError('Valor de saque negativo!')
    };

    return balance -= value;
};

const balance = 100;
const value = 200;


try {
    console.log(`Valor do saque: R$${value} \nSaldo na conta: R$${balance} \nSaldo após o saque: R$${withdraw(balance, value)}`);
} catch (e) {
    console.log(e);
};
