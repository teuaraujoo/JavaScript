// produto -> id, nome, preco, quant
// cliente -> id, nome, cpf, telefone
// cartão -> numero

// verficar estoque, verificar se o produto existe
// verificar cpf

// verificar compra - existência do produto
// verificar desconto (acima de 200 - 10% de desconto)
// verificar compra (cpf, existência do produto)
// verificar cartao

const produtos = [
    { id: 1, nome: 'camisa', preco: 50, quantidade: 10 },
    { id: 2, nome: 'tênis', preco: 200, quantidade: 20 },
    { id: 3, nome: 'boné', preco: 30, quantidade: 5 }
];

const clientes = [
    { id: 1, nome: 'césar', cpf: '12345678900' },
    { id: 2, nome: 'mateus', cpf: '12345678901' },
    { id: 3, nome: 'joão', cpf: '12345678902' }
];

// const carrinho = [
//     { produtoId: 1, quantidade: 2 },
//     { produtoId: 3, quantidade: 1 }
// ];

// const NOME = prompt('Digite seu nome:').toLowerCase();
const NOME = 'mateus';

const carrinho = [];
// const PRODUTO = prompt('Qual produto você quer?').toLowerCase();
const PRODUTO = 'boné';
carrinho.push(PRODUTO);


// const QTD = Number(prompt('Quantas unidades desse produto?'))
const QTD = 2;

let preco = 0;

function compra (){

    const carrinho = [];

    while(true){
        
        // const PRODUTO = prompt('Qual produto você quer?').toLowerCase();
        const PRODUTO = 'boné';

        let situacaoP = verificarProduto(produtos);
        if (situacaoP === 'true'){
            carrinho.push(PRODUTO);
        };

        // let resp = prompt('Deseja adicionar outra produto?(sim/nao)').toLowerCase();
        let resp = 'nao';
        if (resp === 'nao'){
            break;
        }
    }

    for (i of produtos){
        
    }
    const arrayCarrinho = carrinho.map((nome, indice) => {
        return {
            produtoId: produtos[1].id,
            nome: PRODUTO
        };
    });


};












function montarCarrrinho(){

}

function verificarCliente (arr){
    for (c of arr){
        if (c.nome === NOME){
            return true;
        } else {
            return false;
        }
    }
}

function verificarProduto (arr){
    for (p of arr){
        if (p.nome === PRODUTO){
            return true;
        } else {
            return false;
        }
    }
}

function verificarCompra (){

}
function desconto (){

}

/*
const nomes = ['Ana', 'Bruno', 'Carlos'];

const arrayDeObjetos = nomes.map((nome, indice) => {
  return {
    id: indice + 1,
    nome: nome
  };
});

console.log(arrayDeObjetos);

*/