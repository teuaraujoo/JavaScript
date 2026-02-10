function Usuario(nome) {
    this.nome = nome;
}

Usuario.prototype.validar = function() {
    if (typeof this.nome !== "string") {
        throw new TypeError("Nome inválido!");
    }
}

function PessoaFisica(nome, cpf) {
    Usuario.call(this, nome);
    this.cpf = cpf;
}

PessoaFisica.prototype = Object.create(Usuario.prototype);
PessoaFisica.prototype.constructor = PessoaFisica;

PessoaFisica.prototype.validar = function() {
    if (typeof this.nome !== "string") {
        throw new TypeError("Nome inválido!");
    }
    if (this.cpf.length !== 11) {
        throw new RangeError("cpf inválido");
    }
}

function PessoaJuridica(nome, cnpj) {
    Usuario.call(this, nome);
    this.cnpj = cnpj;
}


PessoaJuridica.prototype = Object.create(Usuario.prototype);
PessoaJuridica.prototype.constructor = PessoaJuridica;


PessoaJuridica.prototype.validar = function() {
    if (typeof this.nome !== "string") {
        throw new TypeError("Nome inválido!");
    }
    if (this.cnpj.length !== 11) {
        throw new RangeError("cnpj inválido");
    }
}

const pf = new PessoaFisica("Mateus", "12345678990");
const pj = new PessoaFisica("Mateus", "1234568911");

/*
try {
    pf.validar();
    console.log("Cpf válido!")
} catch(e) {
    console.log(e.message);
} 
*/


try {
    pj.validar();
    console.log("Cpf válido!")
} catch(e) {
    console.log(e.message);
} 
