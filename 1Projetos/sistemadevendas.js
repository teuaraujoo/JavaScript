// produto -> id, nome, preco, quant
// cliente -> id, nome, cpf, telefone
// cartão -> numero

// verficar estoque(quantidade), verificar se o produto existe
// verificar cpf + nome

// verificar desconto (acima de 200 - 10% de desconto)

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

function compra(){

    const verificarDesconto = v => {

    if (v > 200){ return v *= 0.9 };
    };

    function verificarProduto(arr){

        for (n of arr){
            if (n.nome === NOME.toLowerCase()){
                return true;
            };
        };
        return false;
    };

    function verificarQuantidade(arr){

        for (n of arr){
            if (n.quantidade > QTD){
                return true;
            };
        };
        return false;
    };

    const NOME = 'mateus';
    const PRODUTO = 'camisa';
    if (!verificarProduto(PRODUTO)){
        return false;
    };

    const QTD = 2;
    if (!verificarQuantidade(QTD)){
        return false;
    };

};