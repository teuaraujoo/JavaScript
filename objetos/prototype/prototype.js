function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = function(){
        return this.nome + ' ' + this.sobrenome;
    }
}

const p1 = new Pessoa ('Mateus', 'Araujo');
const p2 = new Pessoa ('Pedro', 'Santos');

const p4 = {
    nomeA: 'Cicrano'
}

const p3 = {
    nome: 'Fulano'
}

console.log(p1.nome)
console.log(p2.nome)

Object.setPrototypeOf(p3, p4); // SET PROTOTYPE
console.log(p3.nomeA) // Saída -> 'Cicrano'

console.log(Object.getPrototypeOf(Pessoa)); // GET PROTOTYPE
console.log(Object.getPrototypeOf(p3)); // GET PROTOTYPE
// Não utilizar __proto__


// SETANDO E CRIANDO

const p5 = Object.create(Pessoa.prototype /* quem vai ser o pai? */, {
    tamanho: {
        value: 22,
        enumerable: true,
        // ....
    }
});

console.log(p5.tamanho);
