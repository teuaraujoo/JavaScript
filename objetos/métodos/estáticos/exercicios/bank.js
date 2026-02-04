function Conta(saldo) {
    Object.defineProperty(this, 'saldo', {
        value: saldo,
        enumerable: true,
        writable: true,
        configurable: true
    });

    Object.defineProperty(this, 'depositar', {
        enumerable: false,
        get() {
            return this.saldo;
        },
        set(valor) {
            if (typeof valor !== 'number' || isNaN(valor)) {
                throw new TypeError('Valor inválido!');
            };

            return this.saldo += valor;
        }
    });
};

// Conta.prototype.depositar = function (valor) {
//     if (typeof valor !== 'number' || isNaN(valor)) {
//         throw new TypeError('Valor inválido!');
//     };

//     return this.saldo += valor;
// }

const c1 = new Conta(0);
console.log(c1);
c1.depositar = 100;
console.log(c1);