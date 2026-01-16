// produto -> id, nome, preco, quant
// cliente -> id, nome, cpf, telefone
// cartão -> numero

// verficar estoque(quantidade), verificar se o produto existe ✅
// verificar cpf + nome ✅
// forma de pagamento

// verificar desconto (acima de 200 - 10% de desconto) ✅

const produtos = [
    { id: 1, nome: "camisa", preco: 50, quantidade: 10 },
    { id: 2, nome: "tênis", preco: 200, quantidade: 20 },
    { id: 3, nome: "boné", preco: 30, quantidade: 5 },
];

const clientes = [
    { id: 1, nome: "césar", cpf: "12345678900" },
    { id: 2, nome: "mateus", cpf: "12345678901" },
    { id: 3, nome: "joão", cpf: "12345678902" },
];

const tiposPagamentos = ['débito', 'crédito', 'pix', 'boleto'];

const carrinho = [];

const NOME = 'Mateus'.toLowerCase();
const CPF = '12345678901';

function verificarCliente(nome, cpf){
    for (c of clientes){

        if (c.nome === nome && c.cpf === cpf){
            return true;
        };
    };
    return false;
};

function verificarFormaPagamento(arr, tipo){
    
    for (t of arr){
        if (t === tipo){
            return true;
        };
    };
    return false;
};

function buscarProduto(p){

    for (v of produtos){
        if (p === v.nome){
            return true;
        };
    };
    return false;
};

    function adicionarCarrinho(produto, quantidade){
    
        for (p of produtos){
            if (p.nome === produto){
                carrinho.push({
                    id: p.id,
                    produto: produto,
                    preco: p.preco,
                    qtd: p.quantidade > quantidade ? quantidade : undefined,
                    subtotal: p.preco * quantidade
                });
            };
        };
    
        for (let i = 0; i < carrinho.length; i++){
            if (carrinho[i].qtd === undefined){
                return false;
            };
        };

        return carrinho;
    };

    function calcularTotal(arr){

        valorTotal = arr.reduce((total, item) => total + item.subtotal, 0);
        return valorTotal;
    };

    function quantidadeTotal(arr){

        qtdTotal = arr.reduce((total, item) => total + item.qtd, 0);
        return qtdTotal;
    };

    function calcularDesconto(valor){
        
        return valor > 200 ? valor *= 0.9 : valor;
    };

function notaFiscal(){ 

    let statusCliente = verificarCliente(NOME, CPF);
    if (!statusCliente){
        return 'cliente inválido';
    };

    let valorTotal = 0;

    while (true){

        let PRODUTO = 'camisa';
        buscarProduto(PRODUTO);
        if (!buscarProduto(PRODUTO)){
            console.log('Produto não encontrado');
        };

        let QTD = 2;
        adicionarCarrinho(PRODUTO, QTD);

        const pergunta = 'n';
        if (pergunta === 'n'){
            break;
        };
    };

    console.log(carrinho);

    const FORMA_PAGAMENTO = 'Crédito'.toLowerCase();
    verificarFormaPagamento(FORMA_PAGAMENTO);
    if (!verificarFormaPagamento){
        return 'tipo de pagamento inválido';
    }
    
    return obj = {

        valorTotal: calcularDesconto(calcularTotal(carrinho)),
        valorDesconto: calcularTotal(carrinho) - calcularDesconto(calcularTotal(carrinho)),
        qtdProdutos: quantidadeTotal(carrinho),
        formaPagamento: FORMA_PAGAMENTO
    };
};

console.log(notaFiscal());