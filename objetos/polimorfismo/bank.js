// Super classe / Classe mãe / Classe pai / Classe construtora
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    
    if (this.saldo < valor) {
        console.log('SALDO INVÁLIDO: R$' + this.saldo);
        return;
    }
    
    this.saldo -= valor;
}
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function() {
    console.log(`Ag.: ${this.agencia} \nConta: ${this.conta} \nSaldo: R$${this.saldo.toFixed(2)}`);
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

// Especialização
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`SAQUE BLOQUEADO\n saldo: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

function ContaPolpanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPolpanca.prototype = Object.create(Conta.prototype);
ContaPolpanca.prototype.constructor = ContaCorrente;


const cc = new ContaCorrente(11, 22, 0, 100);
// cc.depositar(10);
// cc.sacar(100);
// cc.sacar(100);

// console.log();

const cp = new ContaPolpanca(12, 33, 0)
// cp.depositar(10);
// cp.sacar(100);
// cp.sacar(100);

console.log(cc)
console.log(cp)