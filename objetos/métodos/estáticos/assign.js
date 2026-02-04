const produto = {
    nome: 'Caneta',
    preco: 1.2
}

const spreadProduct = {...produto}

const newProduto = Object.assign({}, produto);
const newProduto2 = Object.assign({}, 'ola');
const newProduto3 = Object.assign({}, produto, {estoque: 10, marca: 'FaberCastel'});

newProduto.nome = 'Marca texto'
console.log(produto);
console.log(spreadProduct);
console.log(newProduto);
console.log(newProduto2);
console.log(newProduto3);