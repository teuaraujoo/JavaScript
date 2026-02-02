function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome  = sobrenome;

    Object.freeze(this); // congela oas valores do this, logo p1.nome = .... não será permitido e nehuma outra alteração (delete, create)
}

const p1 = new Pessoa('Mateus', 'Araujo'); // a palavra new cria um objeto vazio e atrela as cahves e valores a esse objeto
console.log(p1);

// this = molde
// this.nome = p1.nome