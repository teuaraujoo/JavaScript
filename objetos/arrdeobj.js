const produtos = [
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

produtos.forEach((p) => {
    console.log(`${p.nome} custa ${p.preco}`);
})


for (i = 0; i < produtos.length; i++){
    console.log(`${produtos[i].nome} custa ${produtos[i].preco}`);
}
