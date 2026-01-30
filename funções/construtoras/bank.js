function Conta(titular){

    this.titular = titular;
    this.saldo = 0;

    this.depositar = (valor) => {
        this.saldo += valor;
    };
    this.sacar = (valor) => {
        if (valor > this.saldo){
            console.log('Valor indisponível!');
            return;
        };
        this.saldo -= valor;
    };
    this.extrato = () => {
        return `Titular: ${this.titular} \nSaldo: ${this.saldo}`;
    };
};

const conta = new Conta('Mateus Araujo');

conta.depositar(300);
conta.sacar(400);

console.log(conta.extrato());