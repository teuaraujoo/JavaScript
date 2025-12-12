🧠 Entendendo o for em JavaScript

A estrutura básica do for é:

for (inicializador; condição; expressão final) {
    // bloco de código repetido
}


Vamos entender cada parte:

1) Inicializador

É onde você cria e inicia uma variável que vai controlar o loop.

Exemplo:

let i = 0;


Na prática:

for (let i = 0; i < 10; i++) { }


Essa variável normalmente começa no número que você quer iniciar a contagem.

Você pode:

Começar em 0

Começar em 1

Começar em 10

Até começar de trás (ex.: let i = 10)

2) Condição de saída

É a condição que mantém o loop funcionando.
Enquanto for verdadeira, o for continua repetindo.

Exemplo:

i < 10


Isso significa:

“Repita enquanto i for menor que 10.”

Se a condição for falsa, o loop para.

⚠️ Se você escrever uma condição que nunca fica falsa, cria um loop infinito.

3) Expressão final (incremento ou decremento)

É executada toda vez que o bloco termina uma repetição.

Pode ser:

i++ (incrementa 1)

i-- (decrementa 1)

i += 2 (soma 2)

i -= 3 (tira 3)

até multiplicações, se quiser (i *= 2)

Exemplo:

i++

🔁 Como o for funciona passo a passo
for (let i = 0; i < 5; i++) {
    console.log(i);
}


Inicializa → i = 0

Testa condição → i < 5 → verdadeiro

Executa o bloco → mostra 0

Expressão final → i++ → vira 1

Volta ao passo 2

Repete até i < 5 ser falso

Quando i virar 5, o loop para



🧩 10 Exercícios de FOR (evoluindo a dificuldade)
1) Contagem simples

Mostre os números de 1 a 10 usando for.

2) Contagem regressiva

Mostre os números de 10 até 1 usando for.

3) Contar só números pares

Mostre todos os números pares de 0 a 20.

4) Tabuada

Peça um número ao usuário e mostre a tabuada dele (de 1 a 10).

5) Soma de números

Some todos os números de 1 até 100 e mostre o total.

6) Percorrer um array

Dado:

let frutas = ["maçã", "banana", "uva", "laranja"];


Mostre cada elemento usando for.

7) Contar letras

Peça um nome ao usuário e use um for para contar quantas letras ele tem.

(Sem usar .length diretamente! Faça você mesmo.)

8) Encontrar o maior número

Dado o array:

let numeros = [5, 12, 7, 3, 20, 9];


Use um for para descobrir qual é o maior número do array.

9) Verificar quantos números são maiores que 50

Peça 10 números ao usuário, guarde em um array, e use for para contar quantos são maiores que 50.

10) 🔥 DESAFIO – Fatorial com FOR

Peça um número ao usuário e calcule o fatorial usando for.

Exemplo:

5! = 5 × 4 × 3 × 2 × 1 = 120


Esse exercício testa:

inicializador

condição

decremento

lógica dentro do loop



1) Inverter uma palavra na mão

Peça uma palavra e inverta ela manualmente, sem usar reverse().

Ex.:
“javascript” → “tpircsavaj”

2) Contar vogais e consoantes

Peça uma frase e use um for para contar:

quantas vogais

quantas consoantes (ignorando espaços e pontuação)

3) Produto dos números

Peça um número N e calcule o resultado de:
1 × 2 × 3 × 4 ... × N
(parece fatorial, mas N pode ser qualquer número)

4) Encontrar o segundo maior número

Peça 8 números, coloque em um array e use for para encontrar:

o maior

o segundo maior

Sem ordenar o array. Sem usar .sort().

5) Identificar números primos

Peça um número e diga:

se ele é primo

quantos divisores ele possui

Você deve usar um for para testar os divisores.

6) Gerar os primeiros N termos da sequência de Fibonacci

Peça um número N (ex.: 10) e gere os 10 primeiros termos usando for.

Ex.:
0, 1, 1, 2, 3, 5, 8…

7) Maior palíndromo em uma lista

Dado um array de palavras, encontre qual delas é palíndroma e qual é a maior palíndroma.

Exemplo de entrada:

["ovo", "radar", "javascript", "arara", "ana"]

8) Potência manual

Peça dois números (base e expoente) e calcule:
base^expoente
⚠️ Sem usar Math.pow() nem **

Apenas multiplicações com for.

9) Soma dos dígitos de um número

Peça um número, exemplo: 4931
E some seus dígitos:

4 + 9 + 3 + 1 = 17


Você deve transformar em string e percorrer com for.

10) 🚀 DESAFIO SUPREMO – Detectar padrão em array

Peça ao usuário 10 números e determine:

Se a sequência é crescente

Se é decrescente

Se é constante (todos iguais)

Ou aleatória (não segue nenhum padrão)

O desafio aqui é implementar a lógica manualmente:

Use for para comparar:

cada número com o próximo (array[i] e array[i+1])

Esse exercício simula pensamento de algoritmo profissional.