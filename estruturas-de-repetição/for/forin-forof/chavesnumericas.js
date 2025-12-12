const items = {
    nome: "Monitor",
    preco: 900,
    quantidade: 10,
    qualidade: "Alta",
    peso: 3
};

let possuiNumber = [];

for(item in items){

    if (typeof items[item] === 'number'){
        possuiNumber.push(item);
    }
}

console.log(possuiNumber);