1. Crie uma função que receba um número e retorne o dobro.

Exemplo:

dobro(5) // 10

2. Crie uma função que receba um nome e retorne uma mensagem de boas-vindas.

Exemplo:

boasVindas("Mateus") // "Bem-vindo, Mateus!"

3. Crie uma função que receba dois números e retorne o maior deles.

Sem usar Math.max().

4. Crie uma função que receba um array e retorne a soma de todos os valores.

Use somente for ou while, sem reduce.

5. Crie uma função que diga se um número é par ou ímpar.

Retorne "par" ou "ímpar".

6. Crie uma função que receba um número e retorne o fatorial dele.

Exemplo:

fatorial(5) // 120

7. Crie uma função que receba um array e retorne um novo array só com números maiores que um valor mínimo.

Exemplo:

filtrar([1,5,8,2], 4) // [5,8]

8. Crie uma função que receba uma frase e retorne a quantidade de vogais.

Considere vogais: a, e, i, o, u (maiúsculas e minúsculas).

9. Crie uma função que gere números aleatórios entre dois limites.

Exemplo:

numAleatorio(10, 20) // pode ser qualquer número entre 10 e 20

⭐ 10. DESAFIO (nível alto)

Crie uma função chamada analisarNumeros() que:

receba quantos números o usuário quiser (parâmetro rest)

retorne um OBJETO com:

a quantidade de números

a soma de todos

a média

o maior

o menor

quantos são pares

quantos são ímpares

Exemplo:

analisarNumeros(5, 2, 9, 8)

// Retorno esperado:
{
  quantidade: 4,
  soma: 24,
  media: 6,
  maior: 9,
  menor: 2,
  pares: 2,
  impares: 2
}





--------------------------------------------






1. Crie uma função recursiva que conte quantos dígitos tem um número.

Exemplo:

contarDigitos(2025) // 4

2. Crie uma função que receba outra função como parâmetro (callback) e aplique essa função a todos os elementos de um array.

Sem usar map().

Exemplo:

aplicar([1,2,3], dobro) // [2,4,6]

3. Crie uma função que RETORNA outra função.

A função retornada deve elevar um número a uma potência escolhida.

Exemplo:

const aoQuadrado = potencia(2)
aoQuadrado(5) // 25

4. Crie uma função que recebe um objeto e retorna outro objeto apenas com as propriedades cujo valor seja número.

Sem usar Object.entries().

5. Crie uma função que recebe um array de números e retorna o segundo maior número.

Sem ordenar o array.

6. Crie uma função recursiva que receba um número e gere a sequência Fibonacci até esse número.

Exemplo:

fibo(10) // [0,1,1,2,3,5,8]

7. Crie uma função que simula um sistema de login.

A função deve:

receber usuário e senha

retornar outra função

essa função retornada deve verificar se a senha está correta

Exemplo:

const login = autenticar("mateus", "1234")
login("mateus", "1234") // "Acesso permitido"

8. Crie uma função que recebe um texto e retorna uma função para censurar palavras específicas.

Exemplo:

const censura = criarCensura("palavrão", "****")
censura("Isso é um palavrão!") // "Isso é um ****!"

9. Crie uma função que recebe vários números (rest) e RETORNA outra função que filtre apenas os números maiores que um valor mínimo passado depois.

Exemplo:

const filtro = criarFiltro(5,10,3,12,8)
filtro(9) // [10,12]

10. DESAFIO – Sistema modular (nível MUITO ALTO)

Crie uma função chamada criarCalculadora() que retorna um objeto com os seguintes métodos:

somar(a, b)

subtrair(a, b)

multiplicar(a, b)

dividir(a, b)

historico() → deve mostrar as últimas operações realizadas

limpar() → limpa o histórico

Regras:

O histórico deve mostrar no máximo as 5 últimas operações.

A função principal NÃO pode expor variáveis internas (usar closure).

Exemplo:

const calc = criarCalculadora()
calc.somar(5,3)   // 8
calc.multiplicar(4,2) // 8
calc.historico()  // mostra últimas operações
