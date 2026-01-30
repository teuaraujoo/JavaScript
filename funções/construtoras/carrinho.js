function Carrinho(){

    this.itens = [];

    this.adicionarItens = (nome, preco) => {
        this.itens.push({
            nome,
            preco
        });
    };
    this.valorTotal = () => {
        return this.itens.reduce((soma, item) => soma + item.preco, 0);
    };
};

const carrinho = new Carrinho();

carrinho.adicionarItens('camisa', 150);
carrinho.adicionarItens('calca baggy', 250);
console.log(carrinho.itens);
console.log(carrinho.valorTotal());