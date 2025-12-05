const estoque = { 
    camisa: 10, 
    calça: 0,
    tênis: 5 
}

let falta = [];
let emEstoque = [];

for (const produto in estoque){
    if (estoque[produto] === 0){
        falta.push(produto);
    } else if (estoque[produto] > 0){
        emEstoque.push(produto);
    }
}

console.log('Produtos em falta:', falta);
console.log('Produtos em estoque:', emEstoque);
