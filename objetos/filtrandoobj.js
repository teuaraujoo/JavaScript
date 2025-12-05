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

const maior50 = [];

produtos1.forEach((p) => {
    if (p.preco > 50){
        maior50.push(p.nome);
    }
})

console.log(maior50);

