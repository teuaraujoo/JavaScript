function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: true,
        get: () => {
            return estoque ;
        },
        set: (valor) => {
            if (typeof valor !== 'number' || isNaN(valor)){
                throw new TypeError('Valor inválido!');
            };

            return estoque += valor;
        }
    });
};

const p1 = new Produto('Camiseta', 50, 3);
// console.log(p1);

try {
    p1.estoque = 10;
} catch (e) {
    console.log('Digite um número');
}

console.log(p1.estoque);
