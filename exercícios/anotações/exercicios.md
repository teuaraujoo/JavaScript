# 🧠 Exercícios de JavaScript – Treino de Tipos de Dados, Strings e Arrays

Abaixo estão **10 exercícios** criados seguindo a didática do Gustavo Guanabara, com dificuldade progressiva.

---

## **1) Tipos de Dados – Identificação**

Crie três variáveis: uma string, um number e um boolean. Em seguida, mostre no console o tipo de cada uma usando `typeof`.

---

## **2) Manipulação de Strings – Tamanho da Frase**

Peça ao usuário uma frase e mostre:

* Quantos caracteres ela tem;
* Quantas palavras.

---

## **3) Manipulação de Strings – Formatação**

Peça um nome completo e exiba:

* Tudo em maiúsculas;
* Tudo em minúsculas;
* Apenas a primeira letra maiúscula (capitalize).

---

## **4) Arrays – Cadastro Simples**

Crie um array vazio chamado `itens`. Peça ao usuário para adicionar três coisas que ele gosta. Depois, exiba o array final.

---

## **5) Arrays – Acessando Elementos**

Dado o array:

```javascript
let numeros = [5, 8, 2, 9, 3];
```

Mostre no console:

* O primeiro elemento;
* O último elemento;
* O tamanho do array.

---

## **6) Arrays – Ordenação**

Usando o mesmo array do exercício anterior, coloque os números em ordem crescente usando `.sort()`.

---

## **7) Arrays – Adicionar e Remover**

Crie um array com 4 nomes. Em seguida:

* Adicione um nome no final;
* Remova o primeiro nome;
* Mostre o array atualizado.

---

## **8) Strings + Arrays – Separando Palavras**

Peça ao usuário uma frase e transforme-a em um array, separando pelos espaços.

---

## **9) Arrays – Buscar Valor**

Com o array:

```javascript
let alunos = ['Ana', 'Lucas', 'Mateus', 'Jorge'];
```

Peça um nome ao usuário e diga se ele está dentro do array.

---

## **10) Desafio Prático – Mini Sistema**

Crie um algoritmo que:

* Peça 5 números ao usuário;
* Armazene em um array;
* Mostre a soma de todos;
* Mostre o maior e o menor número.

---

## Operadores Arítimeticos

🧠 10 Exercícios de Operadores Aritméticos (JavaScript)
1) Soma simples

Peça ao usuário dois números e mostre a soma deles.

2) Média de dois números

Peça dois números e exiba a média aritmética.

3) Antecessor e Sucessor

Peça um número inteiro e mostre:

O antecessor

O sucessor

4) Dobro, Triplo e Raiz

Solicite um número e mostre:

O dobro

O triplo

A raiz quadrada

(Use Math.sqrt())

5) Conversor de medidas

Peça um valor em metros e converta para:

centímetros

milímetros

6) Cálculo de desconto

Peça o preço de um produto e aplique 10% de desconto. Mostre o valor final.

7) Aumento salarial

Peça o salário de um funcionário e aplique 15% de aumento.

8) Divisão e resto

Peça dois números e mostre:

O resultado da divisão

O resto da divisão (%)

9) Conversor de temperatura

Peça a temperatura em Celsius e converta para Fahrenheit usando a fórmula:

F = (C * 9/5) + 32

10) Operações combinadas

Peça três números e calcule:

(n1 + n2) * n3

(n1 * n3) / n2

(n1² + n2² + n3²)

(Use ** para potência)


## Operadores de comparação

1) Maior de idade

Peça a idade do usuário e diga se ele é maior ou menor de idade usando >=.

2) Comparando duas notas

Peça duas notas ao usuário e diga se elas são iguais ou diferentes.

3) Número positivo, negativo ou zero

Peça um número e verifique:

se é maior que 0,

igual a 0

ou menor que 0.

Use apenas comparações (sem Math.sign).

4) Login simples

Peça um nome de usuário e verifique se ele é igual a "admin" usando ===.
Mostre:

“Acesso permitido”

ou “Acesso negado”

5) Maior entre dois números

Peça dois números e informe qual deles é maior.
Se forem iguais, informe também.

6) Verificar se um número está entre 10 e 20

Peça um número e diga se ele está entre 10 e 20 (inclusive).
Use:

n >= 10 && n <= 20

7) Triagem de notas

Peça a nota do aluno e diga se ele:

foi aprovado (>= 7)

ficou de recuperação (>= 5 e < 7)

foi reprovado (< 5)

(Ainda só usando comparações, sem lógica mais avançada)

8) Comparando string e number

Peça ao usuário:

um número

uma string com o mesmo número

Compare ambos com == e depois com ===, mostrando a diferença.

9) Verificar múltiplo

Peça um número e verifique se ele é múltiplo de 3, de 5, ou dos dois ao mesmo tempo.
Use comparações envolvendo o resto:

n % 3 === 0
n % 5 === 0

10) 🔥 DESAFIO – Sistema de votação completo

Peça a idade de uma pessoa e determine se ela:

NÃO pode votar (idade < 16)

O voto é opcional (idade === 16 ou idade === 17 ou idade >= 70)

O voto é obrigatório (entre 18 e 69)

Use apenas operadores de comparação, e combine com && e ||.