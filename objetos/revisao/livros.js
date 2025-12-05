// Liste todos os livros, independente da categoria.

const biblioteca = {
    nome: "Biblioteca Central",
    categorias: {
        ficcao: [
            { titulo: "1984", autor: "George Orwell" },
            { titulo: "Admirável Mundo Novo", autor: "Aldous Huxley" }
        ],
        tecnologia: [
            { titulo: "Clean Code", autor: "Robert Martin" }
        ]
    }
};

let fic = [];
let tech = [];
let livros = [];

biblioteca.categorias.ficcao.forEach(element => {
    fic.push(element.titulo);
});

biblioteca.categorias.tecnologia.forEach(element => {
    tech.push(element.titulo);

});

console.log('LIVROS DE FICÇÃO:');
for(i = 0; i < fic.length; i++){
    console.log(`${i + 1}° LIVRO ->  ${fic[i]}`);
}

console.log('----------------------');

console.log('LIVROS DE TECNOLOGIA:');
for(i = 0; i < tech.length; i++){
    console.log(`${i + 1}° LIVRO -> ${tech[i]}`);
}