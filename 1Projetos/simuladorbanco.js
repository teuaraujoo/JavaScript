/* 
nome
data de nascimento (verificar data de nascimento (melhoria))
CPF/CNH... (validar cpf)
senha (ter mais de 8 caracteres)
aguardar análise

numero + titular

depositar, sacar, ver saldo
*/

// Validação do cpf
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

// Validação da senha
function validarSenha(senha){

    if (senha.length < 8) return false;
    if (!/[!@#$%&*]/.test(senha)) return false;
    if(!/[A - Z]/.test(senha)) return false;
    if(!/[a - z]/.test(senha)) return false;
    if(!/[0-9]/.test(senha)) return false;

    return true;
};

// Gerador de conta
const geradorConta = () => {
    
    numero = '';

    for (i = 0; i < 9; i++){
        numero += Math.floor(Math.random() * 10)
    }
    
    return numero.slice(0, 8) + "-" + numero.slice(8);
};

let user = {};
let saldo = 0;

// Criação da conta
function criarConta(){
    
    // Entrada de dados

    // const NOME = prompt('Digite seu nome:');
    const NOME = 'Mateus Santos de Araujo';
    // const DATA_NASCIMENTO = prompt('Digite sua data de nascimento');
    const IDADE = 19;
    // verificacao data de nascimento
    const situacaoNasc = IDADE >= 18;
    if (!situacaoNasc){
        return 'Você é menor de idade!';
    };

    // const CPF = prompt('Digite seu cpf');
    const CPF = '346.092.930-80';
    let situacaoCPF = validarCPF(CPF);
    // verificação cpf
    if (situacaoCPF === false){
        return 'Digite um CPF válido!';
    };
    
    // const SENHA = prompt('Digite sua senha');
    const SENHA = 'aA3@xya!';
    let situacaoSenha = validarSenha(SENHA);
    // verificação senha 
    if (situacaoSenha === false){
        return 'Digite uma senha válida! Deve conter ao menos um caractere maiúsculo, minúsculo, especial e número.';
    };

    const ID = crypto.randomUUID();
    const NUMERO_CONTA = geradorConta();

    // criação do user
    return user = {
        ID,
        numeroConta: NUMERO_CONTA,
        titular: NOME,
        idade: IDADE,
        CPF,
        saldo,
        senha: SENHA
    };
};

criarConta();

// // Funcao para depositar
//     function depositar (){
        
//         // const VALOR = Number(prompt("Qual valor do depósito?"));
//         const VALOR = 200;
//         user.saldo  += VALOR;

//         return `Depósito de R$${VALOR}; Saldo Atual: R$${user.saldo}`;
    
//     };
    
//     // Funcao para sacar
//     function sacar (){
        
//         // const VALOR = Number(prompt('Digite o valor do saque:'));
//         const VALOR = 300;
//         if (VALOR > user.saldo){
//             let aviso = console.log('SALDO INSUFICIENTE');
//             return aviso;
//         } 
//         user.saldo -= VALOR;
//         return  `Saque de R$${VALOR}; Saldo Atual: R$${user.saldo}`
//     }
    
//     // Funcao para ver saldo
//     const verSaldo = () => {
//         return user.saldo;
//     }

    /* Ações do usuário - sacar, depositar, verSaldo*/
    const acoes = {

        saldo: user.saldo,

        depositar(valor){
            user.saldo += valor;
        },

        sacar(valor){
            user.saldo -= valor;
        },

        verSaldo(){
            return user.saldo;
        }
    };


    // Menu de opções
    while (true){

        // let pergunta = prompt('O que deseja fazer (depositar/sacar/ver saldo)?').toLowerCase();
        let pergunta = 'Depositar'.toLowerCase();

        // const VALOR = Number(prompt(`Qual valor deseja ${pergunta}?`));
        const VALOR = 200;

        if (pergunta === 'depositar'){
            acoes.depositar(VALOR);
            console.log(`Valor do depósito: R$${VALOR},00`);
        }
        if (pergunta === 'sacar'){
            if (VALOR > user.saldo){
                console.log(`SALDO INSUFICIENTE! -> Tentativa de saque no valor de R$${VALOR},00`);
            } else {
                acoes.sacar(VALOR);
                console.log(`Valor do saque: R$${VALOR},00`);
            }
        };
        if (pergunta === 'ver saldo') console.log(`Saldo Atual: R$${acoes.verSaldo()},00`);

        // let resp = prompt('Deseja continuar? (s/n)').toLowerCase();
        let resp = 'n';
        if (resp === 'n'){
            break;
        };
    };

    console.log(user);
