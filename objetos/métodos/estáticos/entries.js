const obj = {
    nome: 'fulano',
    sobrenome: 'sicrano',
    idade: 20
}

console.log(Object.entries(obj)); // retorna um array com arrays que possuem a chave e valor das propriedades do objeto

// destructor

for (let [chave, valor] of Object.entries(obj)){
    console.log(chave, valor);
}