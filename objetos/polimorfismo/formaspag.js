function Pagamento(saldo) {
    this.saldo = saldo;
    // this.valor = valor;
}

Pagamento.prototype.pagar = function(valor) {
    if (this.saldo < valor) {
        console.log('saldo inválido');
        return;
    }

    this.saldo -= valor;
    this.exibir();
}

Pagamento.prototype.exibir = function() {
    console.log(`Saldo: R$${this.saldo}`);
}

// VIA PIX
function PagamentoPix(saldo) {
    Pagamento.call(this, saldo);
}

PagamentoPix.prototype = Object.create(Pagamento.prototype);
PagamentoPix.prototype.constructor = PagamentoPix;

// VIA CRÉDITO
function PagamentoCredito(saldo, limite) {
    Pagamento.call(this, saldo);
    this.limite = limite;
}

PagamentoCredito.prototype = Object.create(Pagamento.prototype);
PagamentoCredito.prototype.constructor = PagamentoCredito;

PagamentoCredito.prototype.pagar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log('limite inválido');
        return;
    }
    
    this.saldo -= valor;
    this.exibir();
}

const cartaoCredito = new PagamentoCredito(200, 100);
const cartaoPix = new PagamentoPix(100);

cartaoPix.pagar(100);
