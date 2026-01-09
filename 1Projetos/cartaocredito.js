// CVV - 3 (VISA- MASTERCARD) OU 4 (AMEX) DÍGITOS ⏳
// NUMERO DO CARTAO - 13 A 19 DIGÍTOS ✅
// BANDEIRA ✅
// VALIDADE - DATA PASSADA, MES 1 - 12 ✅

// opcional: bandeira (começo do num do cartao)
/*
Visa - 4
MasterCard - 51–55, 2221–2720
Amex - 34 ou 37
Elo	- Vários prefixos
Discover - 6011
*/

// Algoritmo de Luhn

const tamanho = (num) => {
    if (num.length >= 13 && num.length <= 19){
        return true
    } else {
        return false
    };
};

function bandeira(num){
    if (num[0] === '4'){
        return 'visa';
    } else if (num.slice(0, 2) === '51'){
        return 'mastercard';
    } else if (num.slice(0, 2) === '34' || num.slice(0, 2) === '37'){
        return 'amex';
    } 
    return 'nao identificado';
}

function cvv(n){
    if (bandeira() === 'visa' || bandeira() === 'mastercard' && n.length === 3){
        return true;
    };
    if (bandeira() === 'amex' && n.length === 4){
        return true;
    };
    return false;
}

function verificarValidade(date){

    let partes = date.split("/");
    let mes = Number(partes[0]);
    let ano = Number(partes[1]);

    if (mes < 1 || mes > 12){
        return 'mes invalido';
    };

    ano += 2000;

    let validade = new Date(ano, mes);
    let hoje = new Date();

    if (hoje > validade){
        return 'cartão inválido';
    } else {
        return 'cartao válido';
    };
};