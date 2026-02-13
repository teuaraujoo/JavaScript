const codigoInterno = Symbol('descricao');
class Produto {
    constructor (nome, preco, ci) {
        this.nome = nome;
        this.preco = preco;
        this[codigoInterno] = ci;
    }

    getCodigoInterno() {
        return this[codigoInterno];
    }
}

const p1 = new Produto('Camisa', 50, '001');

console.log(p1)
console.log(p1.getCodigoInterno());
console.log(Object.keys(p1));
console.log(JSON.stringify(p1));


