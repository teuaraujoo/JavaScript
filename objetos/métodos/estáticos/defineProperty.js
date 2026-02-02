function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // exibi chave: valor -> Saída: {estoque: valor}
        value: estoque, // valor da propriedade
        // value: function(){
        //     return estoque;
        // }, também poderia ser uma função ou qualquer outra coisa, você quem define o valor da sua propriedade
        writable: false, // pode alterar o *valor* dessa propriedade?
        configurable: true // configurável? (pode alterar valor da chave, deletar a chave...?)
    });
};

const p1 = new Produto('Camiseta', 50, 3);
console.log(p1);


