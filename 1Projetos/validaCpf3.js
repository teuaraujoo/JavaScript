// Constutor - > base
function ValidaCpf(cpf) {
    Object.defineProperty(this, 'cpfEnviado', {
        enumerable: true,
        // valor da PROPRIEDADE cpfEnviado = PARAMETRO cpf formatodado
        get: function() {
            return cpf.replace(/\D+/g, '');
        }
    })
};

// Função que valida o cpf 
ValidaCpf.prototype.validar = function() {
    if (typeof this.cpfEnviado === 'undefined') return false;
    if (this.cpfEnviado.length !== 11) return false;
    if (this.isSequencia()) return false;

    // pega os 9/10 primeiros digitos do cpf
    const cpfDigitos = this.cpfEnviado.slice(0, -2);
    const d1 = this.criaDigito(cpfDigitos);
    const d2 = this.criaDigito(cpfDigitos + d1);

    // Verifica se os novos dígitos são iguais aos dígitos gerados
    if (d1 === this.cpfEnviado[9] && d2 === this.cpfEnviado[10]) {
        return true;
    } else {
        return false;
    }
}

// Verifica se o cpf enviado é uma sequência
ValidaCpf.prototype.isSequencia = function() {

    const sequencia = this.cpfEnviado[0].repeat(this.cpfEnviado.length);
    return sequencia === this.cpfEnviado;
}

// Cria os 2 digitos verificadores
ValidaCpf.prototype.criaDigito = function(cpf) {

    // transforma o cpf em um array
    const arrayCpf = Array.from(cpf);

    // multiplicador de 10 - 2 e 11 - 2
    let multiplicador = arrayCpf.length + 1;

    const soma = arrayCpf.reduce((acumulador, valor) => {
        acumulador += (multiplicador * Number(valor));
        multiplicador--;
        return acumulador;
    }, 0);

    let digito = soma % 11;
    // Verificação para saber valor do dígito
    if (digito < 2) {
        return '0';
    } else {
        digito = 11 - digito;
        return String(digito);
    }
}

// Instância
const cpf = new ValidaCpf('070.987.720-03');

// Veirificação
if (cpf.validar()) {
    console.log('cpf válido');
} else {
    console.log('cpf inválido');
}