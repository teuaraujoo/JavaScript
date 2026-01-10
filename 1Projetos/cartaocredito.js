// CVV - 3 (VISA- MASTERCARD) OU 4 (AMEX) DÍGITOS ✅
// NUMERO DO CARTAO - 13 A 19 DIGÍTOS ✅
// BANDEIRA ✅
// VALIDADE - DATA PASSADA, MES 1 - 12 ✅

// opcional: bandeira (prefixo do número do cartão)
/*
Visa - 4
MasterCard - 51–55, 2221–2720
Amex - 34 ou 37
*/

// Algoritmo de Luhn ✅

/*
📍 Aprendizados:
* O && tem prioridade maior que ||
* Strings em JS são imutáveis.
* Algoritmo de Luhn
*/

function verificarCartao(){

    const CVV = '9384';
    const VALIDADE = '06/27';
    let NUMERO_CARTAO = '3409 938540 44497';
    
    NUMERO_CARTAO = NUMERO_CARTAO.replace(/\s+/g, '');
    
    // verificação do tamnho do cartão
    const tamanho = (num) => {
    
        if (num.length >= 13 && num.length <= 19){
            return true
        } else {
            return false
        };
    };

    // definição da bandeira de acordo com o prefixo 
    function bandeira(num){
    
        let prefixo = num.slice(0, 2);
        let prefixo2 = num.slice(0, 4);
    
        if (num[0] === '4'){
            return 'visa';
        };
        if (prefixo === '51' || prefixo === '52' || prefixo === '53' || prefixo === '54' || prefixo === '55'){
            return 'mastercard';
        };
        if (prefixo === '34' || prefixo === '37'){
            return 'amex';
        };
        return false;
    }
    
    // Verificação do tamnho do cvv de acordo com a bandeira do cartão
    function cvv(n){

        let tipoBandeira = bandeira(NUMERO_CARTAO);

        if ((tipoBandeira === 'visa' || tipoBandeira === 'mastercard') && n.length === 3){
            return true;
        };
        if (tipoBandeira === 'amex' && n.length === 4){
            return true;
        };
        return false;
    }
    
    // Verificação da data de validade
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
            return false;
        }
        
        return true;
    };
    
    // Algoritimo de Luhn
    function verificarDigito(num){
        
        let soma = 0;
        let deveDobrar = num.length % 2 === 0; // = true para par e false para impar;

        for (let i = 0; i < num.length; i++){

            let digito = Number(num[i]);

            if(deveDobrar){
                digito *= 2;
                if (digito > 9){
                    digito -= 9;
                }
            }
            soma += digito; // soma de todos os digitos
            deveDobrar = !deveDobrar; // inverte o valor do deveDobrar (se era false vira true, se era true vira false...)
        }
        
        // verificação da soma
        if (soma % 10 === 0){
            return true;
        }
    
        return false;
    };

    if (tamanho(NUMERO_CARTAO) === false){
        return 'numero de cartao inválido';
    };
    if (bandeira(NUMERO_CARTAO) === false){
        return 'bandeira nao identificada';
    };
    if (cvv(CVV) === false){
        return 'cvv inválido';
    };
    if (verificarValidade(VALIDADE) === false){
        return 'cartão inválido';
    };
    if (verificarDigito(NUMERO_CARTAO) === false){
        return 'cartão inválido';
    };
    console.log('cartão válido');

    return infosCartao = {
        numeroCartao: NUMERO_CARTAO,
        dataValidade: VALIDADE,
        bandeira: bandeira(NUMERO_CARTAO),
        cvv: CVV, 
    }
};

console.log(verificarCartao());