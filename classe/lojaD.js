class Produto {
    // #id = require('short-uuid').generate();
    #id = crypto.randomUUID();
    constructor(nome, preco, marca) {
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
        this.id = this.#id;
    };

    get preco() {
        return this._preco;
    }

    set preco(valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            throw new Error('Preço inválido!');
        }

        this._preco = valor;
    }

    desconto() {
        const d = 0.9;
        this.preco *= d;
    };
};

class Dispositivo extends Produto {
    constructor(nome, preco, marca, modelo, ano, cor) {
        super(nome, preco, marca);
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    get ano() {
        return this._ano;
    };

    set ano(valor) {
        
        const hoje = new Date();
        if (hoje.getFullYear() <valor) {
            throw new Error('Ano do produto inválido!');
        };

        this._ano = valor;
    };
}

const p1 = new Produto('Capinha', 50, 'gocase');
const d1 = new Dispositivo('Iphone 13', 2100, 'Apple', '13', 2024, 'Preto');

console.log(p1);
console.log(d1);
