✅ GABARITO – Funções Anônimas (JavaScript)
1. Função anônima que retorna o dobro
const dobrar = function(num) {
  return num * 2;
};

2. Função anônima que retorna o maior entre dois números
const maior = function(a, b) {
  return a > b ? a : b;
};

3. Função anônima que recebe string e retorna em minúsculas
const paraMinusculas = function(texto) {
  return texto.toLowerCase();
};

4. Função anônima dentro de setTimeout
setTimeout(function() {
  console.log("Carregando...");
}, 2000);

5. Função anônima que retorna apenas números pares
const pares = function(lista) {
  return lista.filter(function(num) {
    return num % 2 === 0;
  });
};

6. Função anônima que retorna nomes com mais de 5 letras
const filtrarNomes = function(nomes) {
  return nomes.filter(function(nome) {
    return nome.length > 5;
  });
};

7. map() + função anônima para elevar ao quadrado
const quadrados = [1, 2, 3, 4].map(function(num) {
  return num * num;
});

8. filter() com função anônima (maiores de 18)
const pessoas = [
  { nome: "Ana", idade: 17 },
  { nome: "Carlos", idade: 22 },
  { nome: "Beatriz", idade: 19 }
];

const maiores = pessoas.filter(function(pessoa) {
  return pessoa.idade > 18;
});

9. Função anônima para somar todos os números de um array
const somar = function(nums) {
  return nums.reduce(function(total, n) {
    return total + n;
  }, 0);
};

10. DESAFIO — map + filter + reduce com funções anônimas
🔹 Array base:
const produtos = [
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 900 }
];

1️⃣ map → aplicar 10% de desconto
const comDesconto = produtos.map(function(prod) {
  return {
    nome: prod.nome,
    preco: prod.preco * 0.9
  };
});

2️⃣ filter → produtos acima de R$100
const acimaDe100 = comDesconto.filter(function(prod) {
  return prod.preco > 100;
});

3️⃣ reduce → somar os preços
const total = acimaDe100.reduce(function(total, prod) {
  return total + prod.preco;
}, 0);