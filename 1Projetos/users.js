// Super Classe
function Usuario(nome, cpf, telefone, email, dataNascimento) {
    Object.defineProperty(this, 'nome', {
        enumerable: true,
        configurable: false,
        get: function () {
            return nome;
        },
        set: function (str) {
            if (typeof str !== 'string') {
                throw new TypeError('Digite um nome válido');
            }

            nome = str;
        }
    });
    this.nome = nome;

    Object.defineProperty(this, 'cpf', {
        enumerable: true,
        configurable: false,
        get: function () {
            return cpf;
        },
        set: function (cpfEnviado) {

            cpfEnviado = this.cpf.replace(/\D+/g, '');

            if (typeof cpfEnviado === 'undefined') return false;
            if (!Usuario.tamanhoCpf(cpfEnviado)) {
                throw new RangeError('Tamanho do CPF inválido');
            }
            if (Usuario.sequenciaCpf(cpfEnviado)) {
                throw new Error('CPF inválido!');
            }

            const digitosCpf = cpfEnviado.slice(0, -2);
            const digito1 = Usuario.criaDigitoCpf(digitosCpf);
            const digito2 = Usuario.criaDigitoCpf(digitosCpf + digito1);

            const novoCpf = digitosCpf + digito1 + digito2;
            if (novoCpf !== cpfEnviado) {
                throw new Error('cpf inválido!');
            } else {
                return cpf = cpfEnviado;
            }
        }
    });
    this.cpf = cpf;

    Object.defineProperty(this, 'telefone', {
        enumerable: true,
        configurable: false,
        get: function () {
            return telefone;
        },
        set: function (tel) {
            tel = this.telefone.replace(/\D/g, '');
            const regex = /^([1-9]{2})[2-9][0-9]{7,8}$/;
            const situacao = regex.test(tel);

            if (!situacao) {
                throw new SyntaxError('Formato do telefone inválido!');
            }

            telefone = tel;
        }
    });
    this.telefone = telefone;

    Object.defineProperty(this, 'email', {
        enumerable: true,
        configurable: false,
        get: function () {
            return email
        },
        set: function (valor) {
            valor = this.email;
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const condition = regex.test(valor);

            if (!condition) {
                throw new TypeError('Valor do email inválido!');
            };
        }
    });
    this.email = email;

    Object.defineProperty(this, 'dataNascimento', {
        enumerable: true,
        configurable: false,
        get: function () {
            return dataNascimento;
        },
        set: function (dataEnviada) {

            const hoje = new Date();
            dataEnviada = Usuario.formataData(this.dataNascimento); // *

            if (!(dataEnviada instanceof Date) || isNaN(dataEnviada)) {
                throw new TypeError('Data inválida!');
            };

            if (dataEnviada.getFullYear() > hoje.getFullYear()) {
                throw new RangeError('Ano inválido!');
            };

            const idade = hoje.getFullYear() - dataEnviada.getFullYear();
            dataNascimento = dataEnviada;
        }
    });
    this.dataNascimento = dataNascimento;
}

// Métodos estáticos
// Verifica tamanho de cpf
Usuario.tamanhoCpf = function (cpf) {
    if (cpf.length !== 11) {
        return false;
    }

    return true;
}

// Verifica se cpf tem nuemros iguais
Usuario.sequenciaCpf = function (cpf) {

    let todosIguais = true;

    for (let i = 0; i < cpf.length; i++) {
        if (cpf[0] !== cpf[i]) {
            todosIguais = false;
            return;
        }
    }
    return todosIguais;
}

// criacao digito cpf
Usuario.criaDigitoCpf = function (cpf) {

    arrayCpf = Array.from(cpf);

    let multiplicador = cpf.length + 1;

    const soma = arrayCpf.reduce((acumulador, valor) => {
        acumulador += (multiplicador * Number(valor));
        multiplicador--;
        return acumulador;
    }, 0);

    let digito = soma % 11;
    if (digito < 2) {
        return '0';
    } else {
        digito = 11 - digito;
        return String(digito);
    }
}

// formatacao da data
Usuario.formataData = function (data) {

    const [diaR, mesR, anoR] = data.split('/');

    const dia = Number(diaR);
    const mes = Number(mesR);
    const ano = Number(anoR);

    const dataFormatada = new Date(ano, mes - 1, dia);
    return dataFormatada;
}

// "banco de dados"
function BD() {
    this.users = [];
}

// adiciona novos itens ao BD
BD.prototype.adicionar = function (usuario) {
    this.users.push(usuario)
}

// coleta das informações
function entradaDados() {
    return {
        nome: 'Mateus',
        cpf: '070.987.720-03',
        tel: '(79) 98808-1797',
        email: 'mateus@gmail.com',
        dataNascimento: '11/02/2006'
    };
};

// criacao do usuário 
function criaUsuario(lista) {
    const infos = entradaDados()

    try {
        const user = new Usuario(
            infos.nome,
            infos.cpf,
            infos.tel,
            infos.email,
            infos.dataNascimento
        );
        lista.adicionar(user);
    } catch (e) {
        console.log(e.message)
    }
}

// Inicialização
function init() {
    const listaUsers = new BD();
    criaUsuario(listaUsers);

    console.log(listaUsers.users[0].dataNascimento);
}

init();