const soma = (v1, v2) => {
    return v1 + v2
}

console.log(soma(10, 5));

// se tiver apenas 1 parâmetro nao precisa dos parenteses

const nome = 'Mateus';

const saudar = n => {
    return `Olá ${n}!`;
}

console.log(saudar(nome));

// quando nao usar o return nao precisa utilizar as chaves / sem return sem chaves / com return com chaves 

const add = n => n + 10;
// const add = (n) => n + 10 

console.log(add(10));