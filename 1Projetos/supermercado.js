//  O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
//                      Até 5 Kg           Acima de 5 Kg
//                -------------------------------------------
// File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
// Alcatra         R$ 5,90 por Kg          R$ 6,80 por Kg
// Picanha         R$ 6,90 por Kg          R$ 7,80 por Kg
//  ----------------------------------------------------------------------------------
// Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente. Se a compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total da compra. Escreva um programa que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.

// const TIPO = prompt('Qual tipo de carne?');
let tipo = 'Filé Duplo'
// const QUANT = Number(prompt('Qual a quantidade de carne?'));
const QUANT = 10;
// const PAGAMENTO = prompt('Digite o tipo do pagamento:');
let pagamento = 'tabajara';

function cupomFiscal(){

    let precoTotal;
    let precoTotalDesconto;
    tipo = tipo.toUpperCase();
    pagamento = pagamento.toUpperCase();

    if (tipo === 'FILÉ DUPLO' && QUANT <= 5){
        precoTotal = QUANT * 4.90;
    } else if (tipo === 'FILÉ DUPLO' && QUANT > 5){
        precoTotal = QUANT * 5.80;
    }
    if (tipo === 'ALCATRA' && QUANT <= 5){
        precoTotal = QUANT * 5.90;
    } else if (tipo === 'ALCATRA' && QUANT > 5){
        precoTotal = QUANT * 6.80;
    }
    if (tipo === 'PICANHA' && QUANT <= 5){
        precoTotal = QUANT * 6.90;
    } else if (tipo === 'PICANHA' && QUANT > 5){
        precoTotal = QUANT * 7.80;
    }

    if (pagamento === 'TABAJARA'){
        precoTotalDesconto = precoTotal - (precoTotal * 0.85);
    } else {
        precoTotalDesconto = 0;
    }

    const valorDesconto = Number(precoTotalDesconto.toFixed(2));
    const valorPagamento = precoTotal - valorDesconto;

    return cupom = {
        produto: tipo,
        qtd: QUANT,
        tipoPagamento:pagamento,
        precoTotal,
        valorDesconto,
        valorPagamento
    };
};

console.log(cupomFiscal());