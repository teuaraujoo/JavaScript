function Produto(nome, preco, estoque){
    
    Object.defineProperties(this, { 
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    });

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        value: estoque, 
        writable: false, 
        configurable: true 
    });

};

const p1 = new Produto('Camiseta', 50, 3);
console.log(p1);
