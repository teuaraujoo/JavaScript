const loja = {
    nome: "Teteu Outfit",
    endereco: {
    rua: "Avenidas dos Programadores",
    numero: 123
},
    estoque: {
        camisa: 12,
        calca: 4,
        tenis: 0
    }
}


console.log(`Rua e número da loja: ${loja.endereco.rua}, ${loja.endereco.numero}`);

const falta = [];
let i = 0;

// produtos -> iteração 
/*
produtos -> camisa
produtos -> calca
produtos -. tenis
*/

for (const produtos in loja.estoque){
    if (loja.estoque[produtos] === 0){
        falta.push(produtos);
    }
    i++;
}

console.log('Produtos em falta:', falta);
console.log('Quantidade de produtos:',i);


