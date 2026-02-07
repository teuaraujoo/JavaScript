// validar data 
// validar preco
// Produto -> nome, preço, estoque

// Produto não deve se "preocupar" em onde é armazenado.
// Setter é reativo, só vai funcionar quando for chamado
// Produto → regras do produto -> como vai ser criado? com o que vai ser criado?
// Estoque → gerenciamento de coleção -> onde vai ser armazenado? como?
// Frios é um Produto → herança -> todo Frio é um produto
// Estoque tem produtos → composição -> estoque pertence a outra prototype chain

// Objeto base (pai) - Função construtora
function Produto(nome, preco, estoque, validade) {
    this.nome = nome;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Valor inválido (estoque) - Digite um número');
            };

            return estoque = valor;
        }
    });
    this.estoque = estoque; // "reativo"

    Object.defineProperty(this, 'preco', {
        enumerable: true,
        configurable: false,
        get: function () {
            return preco
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Valor inválido (preco) - Digite um número');
            };

            return preco = valor;
        }
    });
    this.preco = preco;

    Object.defineProperty(this, 'validade', {
        enumerable: true,
        configurable: false,
        get: function () {
            return validade;
        },
        set: function (valor) {

            if (!(valor instanceof Date) || isNaN(valor)) {
                throw new TypeError('Data inválida');
            }

            const diaAtual = new Date();

            if (valor <= diaAtual) {
                throw new RangeError('Produto fora da validade');
            };

            return validade = valor;
        }
    });
    this.validade = validade;
}

// Protótipos de Produto
Produto.prototype.estaVencido = function () {
    return this.validade < new Date();
}

Produto.prototype.adicionarEstoque = function (valor) {
    return this.estoque += valor;
}

Produto.prototype.removerEstoque = function (valor) {
    if (valor > this.estoque) {
        throw new RangeError('Quantidade inválida no estoque');
    };

    return this.estoque -= valor;
}

// Métodos estáticos de Produto
Produto.manipularValidade = function (data) {

    const [dia, mes, ano] = data.split('/');
    const diaV = Number(dia);
    const mesV = Number(mes);
    const anoV = Number(ano);

    return new Date(anoV, mesV - 1, diaV);
}

Produto.prototype.situacao = function () {
    const diaAtual = new Date();
    const situacao = this.validade - diaAtual; // retorna milesegundos
    // transformar milesegundos em dias e horas
    const FORMULA_DIAS = (situacao / 86400000).toFixed(0);
    const FORMULA_HORAS = (situacao / 3600000).toFixed(1);

    // Verificação + retorno
    if (FORMULA_DIAS >= 1 && FORMULA_DIAS <= 30) {
        return `Produto perto do vencimento, possui ${FORMULA_DIAS} dias de validade`;
    } else if (FORMULA_DIAS < 1) {
        return `Produto perto do vencimento, possui ${FORMULA_HORAS} horas de validade`;
    } else { // fallback
        return `Produto com ${formula} dias de validade`;
    }
}

// Objeto filho de produto -> especialização
function Frios(nome, preco, estoque, validade, tipo) {

    Produto.call(this, nome, preco, estoque, validade);
    this.tipo = tipo;
}

// Delegação
Frios.prototype = Object.create(Produto.prototype);
Frios.prototype.constructor = Frios;

// Onjeto pai -> faz parte de outra cadeia de protótipos
function Estoque() {
    this.estoque = [];
}

// Portótipos de estoque
Estoque.prototype.adicionar = function (produto) {
    this.estoque.push(produto);
}

Estoque.prototype.listar = function () {
    return this.estoque;
}

// simulação de entrada de dados (factory function)
function coletarInfos() {

    return {
        nome: 'Queijo Parmesão',
        preco: 15,
        estoque: 20,
        validade: '08/02/2026',
        tipo: 'Queijo'
    };
};

// Criaçaõ da instância de Frios
function criarProduto(estoque) {

    const infos = coletarInfos();
    const validade = Produto.manipularValidade(infos.validade);;

    // instância de Frios
    const produto = new Frios(
        infos.nome,
        infos.preco,
        infos.estoque,
        validade,
        infos.tipo
    );

    // composição de produto em estoque
    estoque.adicionar(produto);
};

// retirar estoque do escopo global
function main() {
    const estoque = new Estoque();
    criarProduto(estoque);

    // console.log(estoque.listar());
    console.log(estoque.estoque[0].situacao());
}

main();