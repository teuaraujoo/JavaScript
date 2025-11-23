let itens = [];

for (let i = 0; i < 3; i++) {
    let coisas = prompt(`Digite o ${i + 1}º item que você gosta:`);
    itens.push(coisas);
}

console.log(itens);