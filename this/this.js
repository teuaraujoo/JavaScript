console.log(this);

let pessoa = {
    nome: 'Mateus',
    idade: 18, 
    dizerNome: function(){
        console.log(`O meu nome é ${this.nome}`);
    },
    aniversario: function(){
        this.idade += 1;
    }
};

pessoa.dizerNome();
console.log(pessoa);
pessoa.aniversario();
console.log(pessoa);
