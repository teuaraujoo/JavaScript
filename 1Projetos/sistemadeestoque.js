// Menu:

// 1 - Adicionar produto (adicionar novo produto)
// 2 - Vender produto (retirar do que ja existe)
// 3 - Mostrar estoque (exibir o q tem)
// 4 - Produto com maior quantidade (exibir produto de maior quantidade no estoque)
// 5 - adicionar estoque
// 6 - Sair (FIM)

const estoque = [
    {
        produto: 'banana',
        quantidadeEstoque: 10
    },
    {
        produto: 'maçã',
        quantidadeEstoque: 0
    },
    {
        produto: 'morango',
        quantidadeEstoque: 4
    },
    {
        produto: 'melancia',
        quantidadeEstoque: 3
    }
];

const buscarProduto = (nome) => {
    
    return estoque.find(p => p.produto === nome.toLowerCase());
};

const vendaProduto = (nome, qtd) => {
    
    const produto = buscarProduto(nome);
    
    if (!produto){
        return console.log("Produto não encontrado!");
    };
    
    if (produto.quantidadeEstoque >= qtd){
        produto.quantidadeEstoque -= qtd;
    } else {
        return console.log(`Quantidade indisponível, estamos com apenas ${produto.quantidadeEstoque} ${produto.produto} no estoque`);
    };
};

const maiorQuantidadeEstoque = () => {

    const maior = estoque.reduce((maior, atual) => atual.quantidadeEstoque > maior.quantidadeEstoque ? atual : maior, estoque[0]);
    return maior;
};

const adicionarProduto = (nome, qtd) => {

    const produto = buscarProduto(nome);

    if (produto){
        console.log('Produto já existente!');
    } else {
        estoque.push({
            produto: nome.toLowerCase(),
            quantidadeEstoque: qtd
        });
    };
};

const adicionarEstoque = (nome, qtd) => {

    const produto = buscarProduto(nome);

    if (produto){
        produto.quantidadeEstoque += qtd;
    } else {
        console.log('Produto não encontrado');
    }
};

let resp = parseInt('1');

do {

    console.log('MENU');
    console.log('1 - Adicionar produto');
    console.log('2 - Vender produto');
    console.log('3 - Mostrar estoque');
    console.log('4 - Produto com maior quantidade');
    console.log('5 - Adicionar estoque');
    console.log('6 - Sair');

    const pergunta = 'Kiwi';
    const qtd = 8;
    
    switch(resp){
        case 1:
                adicionarProduto(pergunta, qtd);
                console.log(estoque);
                break;
        case 2:

            vendaProduto(pergunta, qtd);
            
            console.log(estoque);
            break;
        case 3:

            console.log(estoque);
            break;
        case 4:
            
            console.log('PRODUTO COM MAIOR QUANTIDADE:');
            console.log(maiorQuantidadeEstoque());
            break;
        case 5:

            adicionarEstoque(pergunta, qtd);
            console.log(estoque);
            break;
        case 6:
            console.log('Saindo do sistema...')
            break;
        default:
            break;
    }

    resp = parseInt('6');

} while (resp !== 6);
