1. Percorrer array com for…of
const numeros = [2, 5, 7, 9];

for (let valor of numeros) {
  console.log(valor);
}

2. Percorrer índices com for…in
const numeros = [2, 5, 7, 9];

for (let indice in numeros) {
  console.log(indice); // indices: 0,1,2,3
}

3. Percorrer objeto com for…in
const aluno = {
  nome: "Mateus",
  idade: 17,
  nota: 9.5
};

for (let chave in aluno) {
  console.log(`${chave}: ${aluno[chave]}`);
}

4. Percorrer string com for…of
const palavra = "JavaScript";

for (let letra of palavra) {
  console.log(letra);
}

5. Imprimir nomes com mais de 5 letras
const nomes = ["Ana", "Gabriel", "Julia", "Mateus"];

for (let nome of nomes) {
  if (nome.length > 5) {
    console.log(nome);
  }
}

6. Percorrer array de objetos com for…of
const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "João", idade: 25 },
  { nome: "Lara", idade: 30 }
];

for (let pessoa of pessoas) {
  console.log(pessoa.nome);
}

7. Somar valores de um objeto com for…in
const produtos = {
  arroz: 20,
  feijao: 12,
  macarrao: 8,
  carne: 35
};

let total = 0;

for (let item in produtos) {
  total += produtos[item];
}

console.log("Total:", total);

8. Criar array com números pares usando for…of
const numeros = [3, 8, 11, 14, 20];
let pares = [];

for (let valor of numeros) {
  if (valor % 2 === 0) {
    pares.push(valor);
  }
}

console.log(pares);

9. Combinar for…in + for…of
const categorias = {
  frutas: ["maçã", "banana"],
  legumes: ["cenoura", "batata"],
  carnes: ["frango", "carne bovina"]
};

for (let categoria in categorias) {
  console.log(`Categoria: ${categoria}`);

  for (let item of categorias[categoria]) {
    console.log(" - " + item);
  }
}

🔥 10. DESAFIO — Encontrar a maior média da turma
const turma = {
  aluno1: [7, 8, 9],
  aluno2: [6, 10, 9],
  aluno3: [9, 9, 10],
  aluno4: [8, 7, 6]
};

let maiorMedia = 0;
let melhorAluno = "";

for (let aluno in turma) {
  let notas = turma[aluno];
  let soma = 0;

  // percorre as notas com for...of
  for (let nota of notas) {
    soma += nota;
  }

  let media = soma / notas.length;

  if (media > maiorMedia) {
    maiorMedia = media;
    melhorAluno = aluno;
  }
}

console.log(`O aluno com a maior média é ${melhorAluno} com média ${maiorMedia.toFixed(2)}.`);



-----------------------------------------------------




1. Percorrer uma matriz
const matriz = [
  [1, 2],
  [3, 4],
  [5, 6]
];

for (let linha of matriz) {     // percorre cada array interno
  for (let numero of linha) {   // percorre cada número dentro do array
    console.log(numero);
  }
}

2. Somar valores de arrays dentro de um objeto
const vendas = {
  janeiro: [10, 20, 30],
  fevereiro: [5, 10],
  marco: [40, 10, 20]
};

let total = 0;

for (let mes in vendas) {
  for (let valor of vendas[mes]) {
    total += valor;
  }
}

console.log("Total de vendas:", total);

3. Contar letras de cada palavra
const palavras = ["javascript", "programacao", "matheus", "computador"];
const resultado = {};

for (let palavra of palavras) {
  resultado[palavra] = palavra.length;
}

console.log(resultado);

4. Verificar se todas as strings têm o mesmo tamanho
const palavras = ["teste", "carro", "livro", "pedra"];

let tamanho = palavras[0].length;
let iguais = true;

for (let palavra of palavras) {
  if (palavra.length !== tamanho) {
    iguais = false;
    break;
  }
}

console.log(iguais);

5. Inverter chave ↔ valor de um objeto
const paises = {
  brasil: "Brasília",
  argentina: "Buenos Aires",
  chile: "Santiago"
};

const invertido = {};

for (let chave in paises) {
  let valor = paises[chave];
  invertido[valor] = chave;
}

console.log(invertido);

6. Filtrar usuários maiores de idade
const usuarios = [
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 17 },
  { nome: "Lara", idade: 30 }
];

const maiores = [];

for (let user of usuarios) {
  if (user.idade >= 18) {
    maiores.push(user);
  }
}

console.log(maiores);

7. Contar caracteres das propriedades de um objeto
const produto = {
  nome: "Camiseta",
  categoria: "Roupas",
  marca: "Nike"
};

const contagem = {};

for (let chave in produto) {
  contagem[chave] = produto[chave].length;
}

console.log(contagem);

8. Filtrar números pares de um objeto de arrays
const dados = {
  a: [1, 2, 3],
  b: [4, 5, 6],
  c: [7, 8, 9]
};

let pares = [];

for (let chave in dados) {
  for (let numero of dados[chave]) {
    if (numero % 2 === 0) {
      pares.push(numero);
    }
  }
}

console.log("Pares:", pares);

9. Criar um array com chaves que possuem valores numéricos
const item = {
  nome: "Monitor",
  preco: 900,
  quantidade: 10,
  qualidade: "Alta",
  peso: 3
};

const chavesNumericas = [];

for (let chave in item) {
  if (typeof item[chave] === "number") {
    chavesNumericas.push(chave);
  }
}

console.log(chavesNumericas);

🔥 10. DESAFIO — Sistema de notas completo
const turma = {
  aluno1: { nome: "Ana", notas: [7, 8, 9] },
  aluno2: { nome: "João", notas: [6, 6, 8] },
  aluno3: { nome: "Lara", notas: [9, 10, 9] }
};

const medias = {};
let maiorMedia = 0;
let melhorAluno = "";

for (let aluno in turma) {
  const { nome, notas } = turma[aluno];

  let soma = 0;

  for (let nota of notas) {
    soma += nota;
  }

  let media = soma / notas.length;
  medias[nome] = media;

  if (media > maiorMedia) {
    maiorMedia = media;
    melhorAluno = nome;
  }
}

console.log("Médias:", medias);
console.log(`A maior média é de ${melhorAluno}: ${maiorMedia.toFixed(1)}`);