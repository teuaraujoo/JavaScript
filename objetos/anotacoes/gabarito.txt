1. Criar um objeto simples
const aluno = {
  nome: "Mateus",
  idade: 17,
  nota: 9.5
};

console.log(aluno);

2. Acessar propriedades / alterar valores
const aluno = {
  nome: "Mateus",
  idade: 17,
  nota: 9.5
};

// Acessando com ponto
console.log(aluno.nome);

// Acessando com colchetes
console.log(aluno["idade"]);

// Alterando valor
aluno.nota = 10;
console.log(aluno.nota);

3. Adicionar e remover propriedades
const carro = { 
  marca: "Toyota", 
  ano: 2020 
};

// Adicionando propriedade
carro.cor = "Preto";

// Removendo propriedade
delete carro.ano;

console.log(carro);

4. Percorrer objeto e filtrar itens em falta
const estoque = { 
  camisa: 10, 
  calca: 0, 
  tenis: 5 
};

console.log("Produtos disponíveis:");
for (let item in estoque) {
  if (estoque[item] > 0) {
    console.log(item, estoque[item]);
  }
}

console.log("Produtos em falta:");
for (let item in estoque) {
  if (estoque[item] === 0) {
    console.log(item);
  }
}

5. Object.keys / values / entries
const estoque = { camisa: 10, calca: 0, tenis: 5 };

console.log(Object.keys(estoque));  
console.log(Object.values(estoque));  
console.log(Object.entries(estoque));

Object.entries(estoque).forEach(([produto, quantidade]) => {
  console.log(`${produto}: ${quantidade}`);
});

6. Função que recebe um objeto
function mostrarInfo(pessoa) {
  console.log(`${pessoa.nome} tem ${pessoa.idade} anos`);
}

const pessoa = { nome: "Mateus", idade: 17 };
mostrarInfo(pessoa);

7. Array de objetos + forEach
const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Tênis", preco: 200 },
  { nome: "Meia", preco: 10 }
];

produtos.forEach((p) => {
  console.log(`${p.nome} custa R$${p.preco}`);
});

8. Filtrar objetos
const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Tênis", preco: 200 },
  { nome: "Meia", preco: 10 }
];

const baratos = produtos.filter(produto => produto.preco < 50);

console.log(baratos);

9. Atualizar objetos dentro de array
const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Tênis", preco: 200 },
  { nome: "Meia", preco: 10 }
];

produtos.forEach(produto => {
  produto.preco = produto.preco * 1.10; // +10%
});

console.log(produtos);

10. Objeto dentro de objeto + lógica
const loja = {
  nome: "Teteu Outfit",
  endereco: {
    rua: "Avenida dos Programadores",
    numero: 123
  },
  estoque: {
    camisa: 12,
    calca: 4,
    tenis: 0
  }
};

// (a) Mostrar a rua
console.log("Rua da loja:", loja.endereco.rua);

// (b) Itens em falta
console.log("Produtos em falta:");
for (let item in loja.estoque) {
  if (loja.estoque[item] === 0) {
    console.log(item);
  }
}

// (c) Soma total de produtos
let total = 0;
for (let item in loja.estoque) {
  total += loja.estoque[item];
}
console.log("Total de produtos:", total);


11. Funções dentro de objetos (métodos)
const usuario = {
  nome: "Mateus",
  idade: 17,
  saudar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
};

usuario.saudar();

12. Clonar objetos (shallow vs deep copy)
const config = { tema: "dark", layout: { largura: 1200 } };

// Shallow copy
const copiaShallow = { ...config };

// Deep copy
const copiaDeep = JSON.parse(JSON.stringify(config));

// Alterando largura
copiaShallow.layout.largura = 2000;
copiaDeep.layout.largura = 500;

// Mostrando efeitos
console.log("Original:", config);
console.log("Shallow:", copiaShallow);
console.log("Deep:", copiaDeep);


Observação: o shallow copy compartilha objetos internos com o original, o deep copy não.

13. Verificar se uma chave existe
const produto = { nome: "Camisa", preco: 50 };

if (!produto.hasOwnProperty("estoque")) {
  produto.estoque = 0;
}

console.log(produto);

14. Converter array de objetos em objeto
const alunos = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Bruno" },
  { id: 3, nome: "Carla" }
];

const objAlunos = {};

alunos.forEach(aluno => {
  objAlunos[aluno.id] = aluno.nome; 
});

console.log(objAlunos);

15. Função que retorna objeto formatado
function criarProduto(nome, preco) {
  return {
    id: Math.floor(Math.random() * 10000),
    nome,
    preco,
    criadoEm: new Date().toLocaleString()
  };
}

const novoProduto = criarProduto("Tênis", 199);
console.log(novoProduto);

16. Somar valores dentro de array de objetos
const pedidos = [
  { cliente: "João", total: 120 },
  { cliente: "Maria", total: 80 },
  { cliente: "Pedro", total: 40 }
];

const somaTotal = pedidos.reduce((acc, pedido) => acc + pedido.total, 0);

console.log("Soma:", somaTotal);

17. Ordenar array de objetos
const pedidosOrdenados = [...pedidos].sort((a, b) => b.total - a.total);

console.log(pedidosOrdenados);

18. Atualizar item do array com base no id
const carrinho = [
  { id: 1, nome: "Camisa", qtd: 1 },
  { id: 2, nome: "Tenis", qtd: 1 }
];

carrinho.forEach(item => {
  if (item.id === 2) {
    item.qtd = 3;
  }
});

console.log(carrinho);

19. Percorrer objeto com arrays dentro
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

console.log("Todos os livros:");
for (let categoria in biblioteca.categorias) {
  biblioteca.categorias[categoria].forEach(livro => {
    console.log(`${livro.titulo} - ${livro.autor}`);
  });
}

20. Criar um mini banco de dados com métodos
const BD = {
  usuarios: [],

  adicionarUsuario(nome) {
    this.usuarios.push({ id: this.usuarios.length + 1, nome });
  },

  listarUsuarios() {
    return this.usuarios;
  },

  buscarPorNome(nome) {
    return this.usuarios.find(u => u.nome === nome) || null;
  }
};

// Testando
BD.adicionarUsuario("Mateus");
BD.adicionarUsuario("Ana");

console.log(BD.listarUsuarios());
console.log(BD.buscarPorNome("Mateus"));
