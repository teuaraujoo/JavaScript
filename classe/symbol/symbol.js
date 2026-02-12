const id = Symbol("id");

const usuario = {
    nome: "Mateus",
    [id]: 123
};

console.log(usuario.nome);
console.log(usuario.id);
console.log(usuario.Symbol);