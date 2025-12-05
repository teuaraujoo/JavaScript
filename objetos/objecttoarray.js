const estoque = { 
    camisa: 10, 
    calça: 0,
    tênis: 5 
}

console.log(Object.keys(estoque));
console.log(Object.values(estoque));
console.log(Object.entries(estoque));

Object.entries(estoque).forEach(([chave, valor]) => {
    console.log(chave, valor);
})