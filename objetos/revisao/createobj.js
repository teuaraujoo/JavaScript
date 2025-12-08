function verificaID(min, max, id) {
  const numero = Math.floor(Math.random() * (max - min + 1)) + min;
    if (numero === id) {
        return verificaID(min, max, id); 
    }
    return numero;
}

function createObj (nome, preco){

    const data = new Date();
    let id = Math.floor(Math.random() * (100 - 1) + 1);
    if (id === id){
        id = verificaID(1, 100, id);
    }
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