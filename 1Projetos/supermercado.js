//  O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
//                      Até 5 Kg           Acima de 5 Kg
//                -------------------------------------------
// File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
// Alcatra         R$ 5,90 por Kg          R$ 6,80 por Kg
// Picanha         R$ 6,90 por Kg          R$ 7,80 por Kg
//  ----------------------------------------------------------------------------------
// Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente. Se a compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total da compra. Escreva um programa que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.

// const TIPO = prompt('Qual tipo de carne?').toLowerCase();
const TIPO = 'filé duplo'
// const QTD = Number(prompt('Qual a quantidade de carne?'));
const QTD = 3;
// const PAGAMENTO = prompt('Digite o tipo do pagamento:').toLowerCase();
const PAGAMENTO = 'tabajara';

// function cupomFiscal(){

//     let precoTotal;
//     let precoTotalDesconto;

//     if (TIPO === 'filé duplo' && QTD <= 5){
//         precoTotal = QTD * 4.90;
//     } else if (tipo === 'FILÉ DUPLO' && QTD > 5){
//         precoTotal = QTD * 5.80;
//     }
//     if (TIPO === 'alcatra' && QTD <= 5){
//         precoTotal = QTD * 5.90;
//     } else if (tipo === 'ALCATRA' && QTD > 5){
//         precoTotal = QTD * 6.80;
//     }
//     if (TIPO === 'picanha' && QTD <= 5){
//         precoTotal = QTD * 6.90;
//     } else if (tipo === 'PICANHA' && QTD > 5){
//         precoTotal = QTD * 7.80;
//     }

//     if (PAGAMENTO === 'tabajara'){
//         precoTotalDesconto = precoTotal - (precoTotal * 0.85);
//     } else {
//         precoTotalDesconto = 0;
//     }

//     const valorDesconto = Number(precoTotalDesconto.toFixed(2));
//     const valorPagamento = precoTotal - valorDesconto;

//     return cupom = {
//         produto: TIPO,
//         QTD,
//         tipoPagamento: PAGAMENTO,
//         precoTotal,
//         valorDesconto,
//         valorPagamento
//     };
// };

// console.log(cupomFiscal());


/* FORMA MAIS SIMPLES */
function cupomFiscal(){

    let precoTotal;
    let precoTotalDesconto;

    switch(TIPO){
        case 'filé duplo':
            QTD <= 5 ? precoTotal = QTD * 4.90 : precoTotal = QTD * 5.80
        case 'alcatra':
            QTD <= 5 ? precoTotal = QTD * 5.90 : precoTotal = QTD * 6.80
        case 'picanha':
            QTD <= 5 ? precoTotal = QTD * 6.90 : precoTotal = QTD * 7.80
    }

    PAGAMENTO === 'tabajara' ? precoTotalDesconto = precoTotal - (precoTotal * 0.85) : precoTotalDesconto = 0;

    const valorPagamento = precoTotal - precoTotalDesconto;

    return cupom = {
        produto: TIPO,
        quantidade: QTD,
        tipoPagamento: PAGAMENTO,
        precoTotal: Number(precoTotal.toFixed(2)),
        precoTotalDesconto: Number(precoTotalDesconto.toFixed(2)),
        valorPagamento: Number(valorPagamento.toFixed(2))
    };
};

console.log(cupomFiscal());