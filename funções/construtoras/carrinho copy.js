const produtos = [
    { id: 1, nome: "camisa", preco: 50, quantidade: 10 },
    { id: 2, nome: "tênis", preco: 200, quantidade: 20 },
    { id: 3, nome: "boné", preco: 30, quantidade: 5 },
];

function Carrinho(){

    this.itens = [];
    
    this.adicionarItens = (nome, quantidade) => {
        
        function verificarProduto(){
            return produtos.find((e) => e.nome === nome.toLowerCase());
        };
        const p = verificarProduto();
        if (!p){
            console.log('Error: Produto não encontrado');
            return;
        };

        const qtd = p.quantidade >= quantidade;
        if (!qtd){
            console.log('Error: Quantidade indisponível');
            return;
        };

        this.itens.push({
            nome,
            quantidade
        });
    };
    this.valorTotal = () => {
        return this.itens.reduce((soma, item) => {
            const produto = produtos.find((e) => e.nome === item.nome.toLowerCase());
            return soma += (produto.preco * item.quantidade);
        }, 0);
    };
};

const carrinho = new Carrinho();

carrinho.adicionarItens('camisa', 2);
carrinho.adicionarItens('tênis', 3);
console.log(carrinho.itens);
console.log(carrinho.valorTotal());