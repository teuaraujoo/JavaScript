function validarCpf(cpf) {

    cpf = cpf.replace(/\D+/g, '');

    let resto1 = 0;
    let resto2 = 0;
    let todosIguais = true;


    if (cpf.length !== 11) {
        return 'tamanho inválido';
    }

    for (let i = 1; i < cpf.length; i++) {
        if (cpf[0] != cpf[i]) {
            todosIguais = false;
            break;
        };
    };

    if (todosIguais) return 'números iguais';


    for (let i = 0; i < 9; i++) {
        resto1 += Number(cpf[i]) * (10 - i)
    }

    resto1 = resto1 % 11;
    if (resto1 === 0 || resto1 === 1) {
        resto1 = 0;
    } else {
        resto1 = 11 - resto1;
    }

    for (let i = 0; i < 10; i++) {
        resto2 += Number(cpf[i]) * (11 - i)
    }

    resto2 = resto2 % 11;
    if (resto2 === 0 || resto2 === 1) {
        resto2 = 0;
    } else {
        resto2 = 11 - resto2;
    }

    if (Number(cpf[9]) == resto1 && Number(cpf[10]) == resto2) {
        return true;
    } else {
        return false;
    }
}

function ValidaCpf(cpf) {
    Object.defineProperty(this, 'cpf', {
        enumerable: true,
        get: function () {
            return cpf.replace(/\D+/g, '');
        }
    });
};

ValidaCpf.prototype.validacao = function () {
    if (!this.tamanho()) return false;
    if (this.isSequencia()) return false;
    if (!this.digitos()) return false;

    return true;
}

ValidaCpf.prototype.tamanho = function () {

    if (this.cpf.length !== 11) {
        return false;
    };

    return true;
}

ValidaCpf.prototype.isSequencia = function () {

    let todosIguais = true

    for (let i = 0; i < this.cpf.length; i++) {

        if (this.cpf[0] != this.cpf[i]) {
            return false;
        };
    };

    return todosIguais;
}

ValidaCpf.prototype.digitos = function () {

    let resto1 = 0;
    let resto2 = 0;

    for (let i = 0; i < 9; i++) {
        resto1 += Number(this.cpf[i]) * (10 - i);
    }

    resto1 = resto1 % 11;
    if (resto1 === 0 || resto1 === 1) {
        resto1 = 0;
    } else {
        resto1 = 11 - resto1;
    }


    for (let i = 0; i < 10; i++) {
        resto2 += Number(this.cpf[i]) * (11 - i);
    }

    resto2 = resto2 % 11;
    if (resto2 === 0 || resto2 === 1) {
        resto2 = 0;
    } else {
        resto2 = 11 - resto2;
    }

    if (Number(this.cpf[9]) == resto1 && Number(this.cpf[10]) == resto2) {
        return true;
    } else {
        return false;
    }
}

const cpf = new ValidaCpf('070.987.720-03');

if (cpf.validacao()) {
    console.log('válido');
} else {
    console.log('inválido');
}