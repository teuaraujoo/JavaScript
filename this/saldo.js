const banco = {
    saldo: 0,

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito: ${valor}`);
    },

    sacar(valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente');
            return;
        };
        this.saldo -= valor;
        console.log(`Saque: ${valor}`);
    },

    mostrarSaldo() {
        console.log(`Saldo atual: ${this.saldo}`);
    }
};

banco.depositar(100);
banco.sacar(30);
banco.mostrarSaldo();