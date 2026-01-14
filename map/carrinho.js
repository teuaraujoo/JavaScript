const carrinho = [
    { produto: 'Camisa', preco: 50, qtd: 2 },
    { produto: 'Tênis', preco: 200, qtd: 1 }
];

function subtotal(){

    // organização + calculo dos valores (preco * qtd)
let valorTotal = carrinho.map((e) => {

    e = {
            produto: e.produto,
            preco: e.preco * e.qtd
        };

    return e; // [{produto: Camisa, preco: 100}, {produto: Tênis, preco: 200}]
});

let valorFinal = 0;

// soma dos valores calculados
for (i = 0; i < valorTotal.length; i++){

        valorFinal += valorTotal[i].preco; // 100 + 200
    };
    
    return valorFinal;
};

console.log(subtotal());