// Aumento / Desconto
// Camisa -> cor
// caneca -> plástico / porcelana 


// Objeto genérico -> base -> pai
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
    this.descricao = function(){
        return this.nome + ' vale ' + this.preco
    }
}

// Aumento / Desconto
Produto.prototype.aumento = function (valor) {
    this.preco += valor;
};
Produto.prototype.desconto = function (valor) {
    this.preco -= valor;
};

// Camisetas -> 1° especialização -> filha
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

// Definição dos prototypes de camiseta 
Camiseta.prototype = Object.create(Produto.prototype); // Prototype de camiseta recebe os prototypes de produto
Camiseta.prototype.constructor = Camiseta; // construtor de camieta recebe a própria camiseta

Camiseta.prototype.aumento = function (quantia) {
    this.preco += quantia;
}

// Canecas -> 2° especialização -> filha
function Canecas(nome, preco, tipo, estoque) {
    Produto.call(this, nome, preco);
    this.tipo = tipo;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new Error('valor inválido');
            } 
            return estoque = valor;
        }
    })
}

Canecas.prototype = Object.create(Produto.prototype);
Canecas.prototype.constructor = Canecas;


const p1 = new Produto('generico', 10);
const camisa = new Camiseta('regata', 50, 'preta');
camisa.aumento(10);
console.log(camisa.__proto__); //  prototype da instância da camiseta -> camisa
console.log(camisa);
console.log(p1);


const c1 = new Canecas('caneca vermelha', 15, 'plástico', 2);
c1.aumento(10);
console.log(c1);
console.log(c1.descricao())


try {
    c1.estoque = '11'
} catch (e) {
    console.log(e.message)
}
console.log(c1.estoque);