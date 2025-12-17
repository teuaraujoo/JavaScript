//  O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
//                      Até 5 Kg           Acima de 5 Kg
//                -------------------------------------------
// File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
// Alcatra         R$ 5,90 por Kg          R$ 6,80 por Kg
// Picanha         R$ 6,90 por Kg          R$ 7,80 por Kg
//  ----------------------------------------------------------------------------------
// Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total da compra. Escreva um programa que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.

const TIPO = prompt('Qual tipo de carne?');
const QUANT = Number(prompt('Qual a quantidade de carne?'));
const PAGAMENTO = prompt('Digite o tipo do pagamento:');

function cupomFiscal(){

    let precoKg;

    if (TIPO === 'Filé Duplo' && QUANT <= 5){
        precoKg = QUANT * 4.90;
    } else if (TIPO === 'Filé Duplo' && QUANT > 5){
        precoKg = QUANT * 5.80;
    }
    if (TIPO === 'Alcatra' && QUANT <= 5){
        precoKg = QUANT * 5.90;
    } else if (TIPO === 'Alcatra' && QUANT > 5){
        precoKg = QUANT * 6.80;
    }
    if (TIPO === 'Picanha' && QUANT <= 5){
        precokg = QUANT * 6.90;
    } else if (TIPO === 'Picanha' && QUANT > 5){
        precoTotal = QUANT * 7.80;
    }

    if (PAGAMENTO === 'Tabajara'){
        precoKg = precoKg * 0.85;
    }

    const precoTotal = precoKg;
    // const valorDesconto;
    // const valorPagamento;

    return cupom = {
        tipo: TIPO,
        qtd: QUANT,
        tipoPagamento: PAGAMENTO,
        precoTotal,
        valorDesconto,
        valorPagamento
    };
};

