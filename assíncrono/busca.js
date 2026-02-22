// Você vai simular uma busca de produto em uma API.

const produtos = [
    { id: 1, nome: "camisa", preco: 50, quantidade: 10 },
    { id: 2, nome: "tênis", preco: 200, quantidade: 20 },
    { id: 3, nome: "boné", preco: 30, quantidade: 5 },
];

const prompt = require('prompt-sync')();

async function entradaDados() {
    const id = Number(prompt('Digite o id: '));
    const nome = prompt('Digite o nome: ');
    const buscarProduto = await buscaProduto(id, nome, 2);

    try {
        console.log('Produto encontrado:');
        console.log(buscarProduto);
    } catch(e) {
        console.log(e.message);
    }
}

function buscaProduto(id, nome, tempo) {
    tempo *= 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const acharProdutos = produtos.find(p => p.id === id && p.nome === nome );

            if (!acharProdutos) {
                reject('Produto não encotrado');
            }

            resolve(acharProdutos);
        }, tempo)
    })
}

entradaDados();
