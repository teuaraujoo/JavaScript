/* 
nome
data de nascimento (verificar data de nascimento (melhoria))
CPF/CNH... (validar cpf)
senha (ter mais de 8 caracteres)
aguardar análise

numero + titular

depositar, sacar, ver saldo
*/

function validarCPF(cpf){

    cpf = cpf.replace(/\D/g, '');
    
    let resto1 = 0;
    let resto2 = 0;
    let todosIguais = true;

    if (cpf.length !== 11){
        return false;
    };

    for (i = 1; i < cpf.length; i++){
        if(cpf[0] != cpf[i]){
            todosIguais = false;
            break;
        };
    };
    if(todosIguais) return false;

    for (i = 0; i < 9; i++){
        resto1 += parseInt(cpf[i]) * (10 - i);
    };

    resto1 = (resto1 * 10) % 11;  
    if (resto1 === 10){
        resto1 = 0;
    };

    for (i = 0; i < 10; i++){
        resto2 += parseInt(cpf[i]) * (11 - i);
    };

    resto2 = (resto2 * 10) % 11;
    if (resto2 === 10){
        resto2 = 0;
    };

    if (cpf[9] != resto1 || cpf[10] != resto2){
        return false
    };

    return true;
};

function validarSenha(senha){

    if (senha.length < 8) return false;
    if (!/[!@#$%&*]/.test(senha)) return false;
    if(!/[A - Z]/.test(senha)) return false;
    if(!/[a - z]/.test(senha)) return false;
    if(!/[0-9]/.test(senha)) return false;

    return true;
};

const geradorConta = () => {
    
    numero = '';

    for (i = 0; i < 9; i++){
        numero += Math.floor(Math.random() * 10)
    }
    
    return numero.slice(0, 8) + "-" + numero.slice(8);
};

let user = {};
let saldo = 500;

function criarConta(){
    
    // const NOME = prompt('Digite seu nome:');
    const NOME = 'Mateus Santos de Araujo';
    // const DATA_NASCIMENTO = prompt('Digite sua data de nascimento');
    const DATA_NASCIMENTO = 19;
    if(DATA_NASCIMENTO < 18){
        return 'Você é menor de idade!';
    };

    // const CPF = prompt('Digite seu cpf');
    const CPF = '346.092.930-80';
    let situacaoCPF = validarCPF(CPF);
    if (situacaoCPF === false){
        return 'Digite um CPF válido!';
    };
    
    // const SENHA = prompt('Digite sua senha');
    const SENHA = 'aA3@xya!';
    let situacaoSenha = validarSenha(SENHA);
    if (situacaoSenha === false){
        return 'Digite uma senha válida! Deve conter ao menos um caractere maiúsculo, minúsculo, especial e número.';
    };

    const ID = crypto.randomUUID();
    const NUMERO_CONTA = geradorConta();

    return user = {
        ID,
        numeroConta: NUMERO_CONTA,
        titular: NOME,
        dataNascimento: DATA_NASCIMENTO,
        CPF,
        saldo,
        senha: SENHA
    };
};

criarConta();

    function depositar (){
        
        // const VALOR = Number(prompt("Qual valor do depósito?"));
        const VALOR = 200;
        user.saldo  += VALOR;

        return `Depósito de R$${VALOR}; Saldo Atual: R$${user.saldo}`;
    
    };
    
    function sacar (){
        
        // const VALOR = Number(prompt('Digite o valor do saque:'));
        const VALOR = 300;
        if (VALOR > user.saldo){
            let aviso = console.log('SALDO INSUFICIENTE');
            return aviso;
        } 
        user.saldo -= VALOR;
        return  `Saque de R$${VALOR}; Saldo Atual: R$${user.saldo}`
    }
    
    const verSaldo = () => {
        return user.saldo;
    }

    while (true){

        // let pergunta = prompt('O que deseja fazer (depositar/sacar/ver saldo)?').toLowerCase();
        let pergunta = 'sacar';

        if (pergunta === 'depositar') console.log(depositar());
        if (pergunta === 'sacar') console.log(sacar());
        if (pergunta === 'ver saldo') console.log(`Saldo Atual: ${verSaldo()}`);

        // let resp = prompt('Deseja continuar? (s/n)').toLowerCase();
        let resp = 'n';
        if (resp === 'n'){
            break;
        }
    }

    console.log(user);

// slice / Math.floor / Math.random / regex
// funcoes / arrow / UUID