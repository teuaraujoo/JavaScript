class ValidaCPF {

    #cpf;
    constructor(cpf) {
        this.cpf = cpf;
    };

    get cpf() {
        return this.#cpf;
    }

    set cpf(valor) {
        const cpf = valor.replace(/\D+/g, '')

        if (typeof cpf === 'undefined' || typeof cpf !== 'string') return false;
        if (cpf.length !== 11) return false;
        if (this.isSequencia(cpf)) return false;

        const cpfDigitos = cpf.slice(0, -2);
        const d1 = ValidaCPF.criarDigito(cpfDigitos);
        const d2 = ValidaCPF.criarDigito(cpfDigitos + d1);

        if (d1 === cpf[9] && d2 === cpf[10]) {
            this.#cpf = cpf;
        } else {
            throw new Error('cpf inválido')
        }
    }


    isSequencia(cpf) {
        return cpf.charAt(0).repeat(cpf.length) === cpf;
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
}

const c1 = new ValidaCPF('070.987.720-03'); // chamndo o set

console.log(c1.cpf); // cchamando o get
