1. Percorra um array de números e imprima cada valor usando for…of.

Ex.:

const numeros = [2, 5, 7, 9];


Imprimir: 2, 5, 7, 9

2. Use for…in para imprimir todos os índices desse mesmo array.

Ex.: deve mostrar: 0, 1, 2, 3

3. Use for…in para percorrer um objeto com dados de um aluno e imprimir chave e valor.

Ex.:

const aluno = {
  nome: "Mateus",
  idade: 17,
  nota: 9.5
};

4. Usando for…of, percorra uma string e imprima cada caractere.

Ex.:
Entrada: "JavaScript"
Saída: J a v a S c r i p t

5. Crie um array de nomes e imprima somente os nomes com mais de 5 letras usando for…of.

Ex.:

const nomes = ["Ana", "Gabriel", "Julia", "Mateus"];

6. Percorra um array de objetos usando for…of e imprima apenas o nome de cada pessoa.

Ex.:

const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "João", idade: 25 },
  { nome: "Lara", idade: 30 }
];

7. Dado um objeto com preços, use for…in para somar todos os valores.

Ex.:

const produtos = {
  arroz: 20,
  feijao: 12,
  macarrao: 8,
  carne: 35
};


Calcule o total.

8. Use for…of com um array de números e crie outro array apenas com números pares.

Ex.:
Entrada: [3, 8, 11, 14, 20]
Saída: [8, 14, 20]

9. Combine for…in e for…of: percorra um objeto onde cada chave contém um array. Imprima todos os itens.

Ex.:

const categorias = {
  frutas: ["maçã", "banana"],
  legumes: ["cenoura", "batata"],
  carnes: ["frango", "carne bovina"]
};

🔥 10. DESAFIO — Analise uma turma e encontre o aluno com a maior média usando for…in e for…of.
const turma = {
  aluno1: [7, 8, 9],
  aluno2: [6, 10, 9],
  aluno3: [9, 9, 10],
  aluno4: [8, 7, 6]
};


Tarefas:

Percorrer cada aluno (for…in).

Para cada aluno, percorrer as notas (for…of).

Calcular a média.

Descobrir quem tem a maior média.

Exibir o nome do aluno e sua média.


--------------------------------------------------------



1. Percorra um array de arrays

Dado:

const matriz = [
  [1, 2],
  [3, 4],
  [5, 6]
];


Use for…of para imprimir todos os números da matriz.

2. Somar valores de arrays dentro de um objeto

Dado:

const vendas = {
  janeiro: [10, 20, 30],
  fevereiro: [5, 10],
  marco: [40, 10, 20]
};


Use for…in para percorrer os meses
e for…of para somar os valores.

3. Contar quantas letras existem em cada palavra

Dado um array de palavras:

["javascript", "programacao", "matheus", "computador"]


Use for…of e retorne um objeto:

{
  javascript: 10,
  programacao: 11,
  ...
}

4. Verificar se todas as strings de um array têm a mesma quantidade de caracteres

Retorne true ou false.

5. Inverter um objeto (trocar chave por valor)

Exemplo:

const paises = {
  brasil: "Brasília",
  argentina: "Buenos Aires",
  chile: "Santiago"
};


Gerar:

{
  Brasília: "brasil",
  "Buenos Aires": "argentina",
  Santiago: "chile"
}


Use for…in.

6. Filtrar objetos em um array

Dado:

const usuarios = [
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 17 },
  { nome: "Lara", idade: 30 }
];


Use for…of para retornar um array apenas com usuários maiores de idade.

7. Criar um objeto com a contagem de caracteres de cada propriedade

Dado:

const produto = {
  nome: "Camiseta",
  categoria: "Roupas",
  marca: "Nike"
};


Gerar:

{
  nome: 8,
  categoria: 7,
  marca: 4
}

8. Filtrar todos os números pares dentro de um objeto que contém arrays

Ex.:

const dados = {
  a: [1, 2, 3],
  b: [4, 5, 6],
  c: [7, 8, 9]
};


Retornar apenas os valores pares em um único array.

9. Criar um array contendo todas as chaves de um objeto que possuem valores numéricos

Exemplo:

const item = {
  nome: "Monitor",
  preco: 900,
  quantidade: 10,
  qualidade: "Alta",
  peso: 3
};


Retornar:
["preco", "quantidade", "peso"]

🔥 10. DESAFIO – Sistema de notas avançado

Dado:

const turma = {
  aluno1: { nome: "Ana", notas: [7, 8, 9] },
  aluno2: { nome: "João", notas: [6, 6, 8] },
  aluno3: { nome: "Lara", notas: [9, 10, 9] }
};


Tarefas:

Percorrer cada aluno com for…in

Calcular a média de suas notas usando for…of

Criar um objeto assim:

{
  Ana: 8,
  João: 6.6,
  Lara: 9.3
}


Identificar o(a) aluno(a) com a maior média

Exibir no final:

"A maior média é de Lara: 9.3"