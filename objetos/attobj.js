const produtos1 = [
    { 
        nome: "Camisa", 
        preco: 50 
    },
    { 
        nome: "Tênis", 
        preco: 200 
    },
    { 
        nome: "Meia", 
        preco: 10 
    }
];

const aumento = 1.10;

produtos1.forEach((p) => {
    p.preco = (p.preco * aumento).toFixed(0);
});

console.log(produtos1);
