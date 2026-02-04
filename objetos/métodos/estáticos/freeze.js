const obj = {
    nome: 'fulano',
    sobrenome: 'sicrano',
    idade: 20
}

Object.freeze(obj);
delete obj.idade;
obj.nome = 'Mateus';
console.log(obj);