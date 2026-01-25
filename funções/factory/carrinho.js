function carrinhoCompras(){
    return {
        itens: [],
        adicionarItem(nome, preco){
            this.itens.push({
                nome, 
                preco
            });
        },
        get valorTotal(){
            return this.itens.reduce((soma, item) => soma += item.preco, 0);
        },
    };
};

const p1 = carrinhoCompras();

p1.adicionarItem('Camisa', 150);
p1.adicionarItem('Calca', 250);
p1.adicionarItem('Regata', 80)
console.log(p1.itens);
console.log(p1.valorTotal);
