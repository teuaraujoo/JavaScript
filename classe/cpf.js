class ValidaCPF{
    constructor(cpf) {
        Object.defineProperty(this, 'cpf', {
            writable: true,
            enumerable: true,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        });
    };


    isSequencia() {
        return this.cpf.charAt(0).repeat(this.cpf.length) === this.cpf;
    }

    static criarDigito(cpf) {

        const arrayCpf = Array.from(cpf);

        let multiplicador = arrayCpf.length + 1;

        const soma = arrayCpf.reduce((ac, val) => {
            ac += multiplicador * Number(val);
            multiplicador--;
            return ac;
        }, 0);

        let digito = soma % 11;

        if (digito < 2) {
            return '0';
        } else {
            digito = 11 - digito;
            return String(digito);
        }
    }

    validar() {
        if (typeof this.cpf === 'undefined' || typeof this.cpf !== 'string') return false;
        if (this.cpf.length !== 11) return false;
        if (this.isSequencia()) return false;

        const cpfDigitos = this.cpf.slice(0, -2);
        const d1 = ValidaCPF.criarDigito(cpfDigitos);
        const d2 = ValidaCPF.criarDigito(cpfDigitos + d1);
        
        if (d1 === this.cpf[0] && d2 === this.cpf[10]) {
            return true;
        } else {
            return false;
        }
    }
}

const c1 = new ValidaCPF('070.987.720-03');

if (c1.validar()) {
    console.log('Valido')
} else {
    console.log('Inválido')
}