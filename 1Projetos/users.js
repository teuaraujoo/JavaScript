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

            if (typeof cpfEnviado === 'undefiend') return false;
            if (!Usuario.tamanhoCpf(cpfEnviado)) {
                throw new RangeError('Tamanho do CPF inválido');
            }
            if (Usuario.sequenciaCpf(cpfEnviado)) {
                throw new Error('CPF inválido!');
            }

            const digitosCpf = cpfEnviado.slice(0, -2);
            const digito1 = Usuario.criaDigitoCpf(digitosCpf);
            const digito2 = Usuario.criaDigitoCpf(digitosCpf + digito1);

            if (digito1 === cpfEnviado[9] && digito2 === cpfEnviado[10]) {
                return cpf = cpfEnviado;
            };
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
            tel = tel.replace(/\D+/g, '');

            if (tel.length !== 11) {
                throw new RangeError('Tamanho do n° de Telefone inválido');
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
            const condition = valor.includes('@');
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
            dataEnviada = Usuario.formataData(dataEnviada); // *

            if (!(dataEnviada instanceof Date) || isNaN(dataEnviada)) {
                throw new TypeError('Data inválida!');
            };

            if (dataEnviada.getMonth() > 11) {
                throw new RangeError('Mês inválido!');
            };

            if (dataEnviada.getFullYear() > hoje.getFullYear()) {
                throw new RangeError('Ano inválido!');
            };

            if (dataEnviada.getDate() > 31) {
                throw new RangeError('Dia inválido!');
            };

            const idade = hoje.getFullYear() - dataEnviada.getFullYear();
            dataNascimento = idade;
        }
    });
    this.dataNascimento = dataNascimento;
}

Usuario.tamanhoCpf = function (cpf) {
    if (cpf.length !== 11) {
        return false;
    }

    return true;
}

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

Usuario.criaDigitoCpf = function (cpf) {

    arrayCpf = Array.from(cpf);

    let multiplicador = cpf.length + 1;

    const soma = arrayCpf.reduce((acumulador, valor) => {

        acumulador += (multiplicador * Number(valor));
        multiplicador--;
        return acumulador;
    });

    let digito = soma % 11;
    if (digito < 2) {
        return '0';
    } else {
        digito = 11 - digito;
        return String(digito);
    }
}

Usuario.formataData = function (data) {

    const [diaR, mesR, anoR] = data.split('/');

    const dia = Number(diaR);
    const mes = Number(mesR);
    const ano = Number(anoR);

    const dataFormatada = new Date(ano, mes - 1, dia);
    return dataFormatada;
}

function BD() {
    this.users = [];
}

BD.prototype.adicionar = function(usuario) {
    this.users.push(usuario)
}

function entradaDados() {
    return {
        nome: 'Mateus',
        cpf: '682.208.730-35',
        tel: '(79) 98808-1797',
        email: 'mateus@gmail.com',
        dataNascimento: '11/02/2006'
    };
};

function criaUsuario(lista) {

    const infos = entradaDados()
    
    const user = new Usuario(
        infos.nome, 
        infos.cpf, 
        infos.tel,
        infos.email,
        infos.dataNascimento
    );

    lista.adicionar(user);
}

function init() {
    const listaUsers = new BD();
    criaUsuario(listaUsers);

    console.log(listaUsers.users);
}

init();