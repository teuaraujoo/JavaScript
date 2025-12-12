1. Crie um objeto simples

Crie um objeto aluno com nome, idade e nota. Mostre tudo no console.

2. Acessando propriedades

Use o objeto acima e:

Acesse uma propriedade com .

Acesse outra com []

Troque o valor de uma propriedade

3. Adicione e remova propriedades

Dado:

const carro = { marca: "Toyota", ano: 2020 };


Adicione cor

Remova ano

4. Percorra um objeto

Dado:

const estoque = { camisa: 10, calça: 0, tênis: 5 };


Mostre:

produtos com quantidade > 0

produtos com quantidade === 0 (em falta)

5. Transforme objeto em array

Usando o estoque acima:

Mostre as chaves (Object.keys)

Mostre os valores (Object.values)

Liste chave → valor usando Object.entries

6. Crie uma função que recebe um objeto

Função:

function mostrarInfo(pessoa) {}


Recebe:

{ nome: "Mateus", idade: 17 }


Imprime: "Mateus tem 17 anos"

7. Array de objetos

Dado:

const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Tênis", preco: 200 },
  { nome: "Meia", preco: 10 }
]


Mostre todos os nomes e preços usando .forEach.

8. Filtrar objetos

Usando o array acima:

filtre produtos com preço < 50

9. Atualizar objetos dentro de array

Aumente o preço de todos os produtos em 10%.

10. Objeto dentro de objeto (nível avançado)

Dado:

const loja = {
  nome: "Teteu Outfit",
  endereco: {
    rua: "Avenidas dos Programadores",
    numero: 123
  },
  estoque: {
    camisa: 12,
    calca: 4,
    tenis: 0
  }
}


Tarefas:

Mostre a rua da loja

Verifique quais itens do estoque estão zerados

Some a quantidade total de produtos


11. Funções dentro de objetos (métodos)

Crie um objeto usuario com nome, idade e um método saudar() que imprime:
"Olá, meu nome é X e tenho Y anos."
Chame o método.

12. Clonar objetos (shallow copy e deep copy)

Dado o objeto:

const config = { tema: "dark", layout: { largura: 1200 } };


Faça:

uma cópia shallow usando {...obj}

uma cópia deep usando JSON.parse(JSON.stringify(obj))

altere a largura do layout em cada cópia e observe os efeitos

13. Verificar se uma chave existe

Dado:

const produto = { nome: "Camisa", preco: 50 };


Verifique se existe a chave estoque no objeto. Se não existir, adicione com valor 0.

14. Converter array de objetos em um objeto

Dado:

const alunos = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Bruno" },
  { id: 3, nome: "Carla" }
];


Transforme em um objeto onde a chave é o ID:

{
  1: "Ana",
  2: "Bruno",
  3: "Carla"
}

15. Criar uma função que retorna um objeto formatado

Crie a função:

function criarProduto(nome, preco) {}


Ela deve retornar um objeto assim:

{ id: númeroAleatorio, nome, preco, criadoEm: dataAtual }

16. Somar valores dentro de array de objetos

Dado:

const pedidos = [
  { cliente: "João", total: 120 },
  { cliente: "Maria", total: 80 },
  { cliente: "Pedro", total: 40 }
];


Some todos os valores total.

17. Ordenar array de objetos (ordenar.js)

Com o array de pedidos acima, ordene por valor total (do maior para o menor).

18. Atualizar um item do array com base em uma chave

Dado:

const carrinho = [
  { id: 1, nome: "Camisa", qtd: 1 },
  { id: 2, nome: "Tenis", qtd: 1 }
];


Aumente a quantidade (qtd) do item com id = 2 para 3.

19. Objeto com array dentro + percorrer tudo

Dado:

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


Liste todos os livros, independente da categoria.

20. Criar um "banco de dados" simples com métodos

Crie um objeto chamado BD com:

um array usuarios

método adicionarUsuario(nome)

método listarUsuarios()

método buscarPorNome(nome) que retorna o usuário encontrado

Exemplo:

BD.adicionarUsuario("Mateus");
BD.buscarPorNome("Mateus");