1. Soma simples com rest

Crie uma função que receba qualquer quantidade de números e retorne a soma deles usando ...numeros.

2. Função que retorna o maior número

Crie uma função que receba números com rest e retorne o maior deles.

3. Concatenar palavras

Crie uma função que receba várias strings e retorne uma frase juntando todas elas separadas por espaço.

4. Média de valores

Crie uma função media(...valores) que retorna a média dos números passados.

5. Filtrar apenas números

Crie uma função que receba parâmetros mistos (números, strings, booleanos...) e retorne somente os números em um array.
Use rest + typeof.

6. Criar um objeto com rest

Crie uma função que recebe nome, idade e depois qualquer quantidade de hobbies.
Retorne um objeto:

{
  nome: "...",
  idade: ...,
  hobbies: [ ...rest ]
}

7. Multiplicar todos os valores por um fator fixo

Crie uma função:

multiplicar(fator, ...numeros)


Retorne um array com todos os numeros multiplicados pelo fator.

8. Misturar arrays

Crie uma função:

unirArrays(...arrays)


Cada parâmetro será um array.
Retorne um único array com todos os elementos mesclados.

9. Criar função que conta quantos argumentos de cada tipo foram passados

Exemplo:

contarTipos(1, "oi", true, 55, "js")


Retorno esperado:

{
  number: 2,
  string: 2,
  boolean: 1
}

🔥 10. DESAFIO — Função avançada de validação dinâmica

Crie uma função:

validarObjeto(obj, ...regras)


Onde cada item de regras será uma string representando uma regra a ser verificada no objeto.

Exemplos de regras:

"temNome" → retorna verdadeiro se obj.nome existir

"maiorDeIdade" → verdadeiro se obj.idade >= 18

"temEmail" → se existir obj.email

Seu objetivo:

A função recebe um objeto.

Recebe várias regras via rest.

Para cada regra, verificar se o objeto passa ou não.

Retornar um novo objeto assim:

{
  temNome: true/false,
  maiorDeIdade: true/false,
  temEmail: true/false
}