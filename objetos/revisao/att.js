const carrinho = [
    { id: 1, nome: "Camisa", qtd: 1 },
    { id: 2, nome: "Tenis", qtd: 1 }
];

// let qtd = Number(prompt('Digite a quantidade de camisas:'));
let qtdCamisa = 10;
let qtdTenis = 20;

carrinho.forEach(element => {
    
    if (element.id === 1){
        element.qtd = qtdCamisa;
    } 
    if (element.id === 2){
        element.qtd = qtdTenis;
    }

});

console.log(carrinho);