const produtos = ['Camisa', 'Calça', 'Tênis'];

let obj = produtos.map((e, i) => {

    return `Produto${i + 1}: ${e}`;
});

console.log(obj);