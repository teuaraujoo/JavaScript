// produto -> id, nome, preco, quant
// cliente -> id, nome, cpf, telefone
// cartão -> numero

// verficar estoque(quantidade), verificar se o produto existe ✅
// verificar cpf + nome ✅
// forma de pagamento ✅

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

// verifica o nome e cpf do cliente
function validarCliente(nome, cpf) {

    const c = clientes.find((cliente) => nome.toLowerCase() === cliente.nome && cpf === cliente.cpf);
    
    if (!c){
        throw new ReferenceError('Cliente não encontrado');
    }

    return c;
};

// verifica a forma de pagamento 
function validarFormaPagamento(tipo) {

    const pag = tiposPagamentos.find(e => e === tipo.toLowerCase());
    if (!pag){
        throw new TypeError('Tipo de pagamento inválido');
    };

    return pag;
};

// Adciona produto e quantidade ao carrinho
function adicionarCarrinho(produto, quantidade) {

    const p = produtos.find(p => p.nome === produto); // RETORNO -> { id: X, nome: Y, preco: Z, quantidade: A },
    if (!p) {
        throw new ReferenceError('Produto não encontrado!');
    }

    const verificaQtd = p.quantidade >= quantidade;
    if (!verificaQtd) {
        throw new RangeError('Quantidade indisponível!');
    };

    carrinho.push({
        id: p.id,
        produto,
        preco: p.preco,
        qtd: quantidade,
        subtotal: p.preco * quantidade
    });

    return carrinho;
};

// Calcula o valor total da compra
function calcularTotal(arr) {

    return arr.reduce((total, item) => total + item.subtotal, 0);
};

// calcula a quantidade de produtos da compra
function quantidadeTotal(arr) {

    return arr.reduce((total, item) => total + item.qtd, 0);
};

// verifica e calcula o desconto 
function aplicarDesconto(valor) {

    return valor > 200 ? valor * 0.9 : valor;
};

// Gera nota fiscal com infos da compra
function notaFiscal() {

    // Entrada de dados
    const nome = 'Mateus';
    const cpf = '12345678901';

    // Verificação do cliente 
    try {
        validarCliente(nome, cpf);
    } catch (e){
        console.log(e.message);
        return;
    }

    while (true) {
        
        // Entrada de dados -> produtos e quantidade
        let produto = 'Camisa'.toLowerCase();
        let quantidade = 2;
        try {
            adicionarCarrinho(produto, quantidade);
        } catch (e) {
            console.log(e.message);
            return;
        };

        const pergunta = 'n';
        if (pergunta === 'n') {
            break;
        };
    };

    // Entrada de dados -> forma de pagamento
    const FORMA_PAGAMENTO = 'Crédito';
    try {
        validarFormaPagamento(FORMA_PAGAMENTO);
    } catch (e){
        console.log(e.message);
        return;
    }

    // Cálculo do Valor total da compra
    const valorTotal = calcularTotal(carrinho);
    const totalComDesconto = aplicarDesconto(calcularTotal(carrinho));
    const qtdProdutos = quantidadeTotal(carrinho);
    const formaPagamento = validarFormaPagamento(FORMA_PAGAMENTO)

    // retorno da função
    return {

        cliente: nome,
        cpf,
        valorTotal,
        totalComDesconto,
        qtdProdutos,
        formaPagamento
    };
};

console.log(notaFiscal());