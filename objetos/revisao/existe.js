const produto = [{ 
    nome: "Camisa", 
    preco: 50 
}];

if (produto.some(produto => produto.preco === 50)){
    console.log('SUCESSO');
};

if (!produto[0].hasOwnProperty("estoque")){
    produto[0].estoque = 0;
}

console.log(produto);

// O método hasOwnProperty() retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão

const obj = {
    nome: 'joel',
    idade: 19,
};

if (obj.hasOwnProperty("ano")){
    console.log('SUCESSO');
} else if (obj.hasOwnProperty('nome')){
    console.log('AEEEEE');
} 

if (!obj.hasOwnProperty('ano')){
    obj.ano = 2020;
}

console.log(obj);