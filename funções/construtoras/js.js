function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.saudar = function (){
        return `Olá ${this.nome} ${this.sobrenome}`;
    }
};

const pessoa = new Pessoa('Mateus', 'Araujo')
console.log(pessoa.saudar());