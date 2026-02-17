class Produto {

    static marcas = ['spigen', 'gshield', 'gocase', 'otterbox', 'nillkin', 'vx Case','samsung', 'apple', 'motorola', 'lg', 'google'];
    #id = require('short-uuid').generate();

    constructor(nome, preco, marca) {
        if (typeof nome !== 'string') throw new Error('Nome inválido');
        if (!Produto.marcas.includes(marca.toLowerCase())) throw new Error('Marca não cadastrada');
        this.id = this.#id;
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
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
        if (hoje.getFullYear() < valor) {
            throw new Error('Ano do produto inválido!');
        };

        this._ano = valor;
    };

    exibirNome() {
        return this.nome + ' ' + this.modelo;
    }
}

class Estoque {
    constructor() {
        this.estoque = [];
    }

    adicionar(valor) {
        this.estoque.push(valor)
    }

    exibir() {
        return this.estoque;
    }
}

function entradaDados() {

    return {
        nome: 'Iphone',
        preco: 2500,
        marca: 'Apple',
        modelo: 13,
        ano: 2023,
        cor: 'Preto'
    };
};

function init() {
    const infos = entradaDados()
    const estoque = new Estoque();

    const produto = new Dispositivo(
        infos.nome,
        infos.preco,
        infos.marca,
        infos.modelo,
        infos.ano,
        infos.cor
    );

    estoque.adicionar(produto);
    console.log(estoque.exibir());
}

init();

