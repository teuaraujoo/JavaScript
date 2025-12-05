function createObj (nome, preco){

    const data = new Date();
    let id = Math.floor(Math.random() * (100 - 1) + 1);

    const obj = {
        id: id,
        nome: nome,
        preco: preco,
        dataAtual: data
    };
    return obj;
}

let nome = 'Tenis';
let preco = 250;

console.log(createObj(nome, preco));