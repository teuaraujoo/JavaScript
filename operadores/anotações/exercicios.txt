1) Classificação de Triângulos

Peça ao usuário três lados de um triângulo e determine se ele é:

Equilátero (todos iguais)

Isósceles (dois iguais)

Escaleno (todos diferentes)

Use apenas comparações.

2) Número mais próximo de 100

Peça dois números e determine qual deles está mais próximo de 100.
Use valores absolutos (Math.abs) e comparações.

3) Ano bissexto

Peça um ano e determine se ele é bissexto usando apenas comparações:
Regra:

Ano divisível por 4

Mas se for divisível por 100, só é bissexto se também for divisível por 400

4) Autorização de compra

Peça:

idade

se possui cartão de crédito (true/false)

se possui saldo suficiente

Autorize a compra apenas se:

idade ≥ 18

e tiver cartão

e saldo ≥ valor

5) Comparando três números

Peça três números e determine:

o maior

o menor

se todos são iguais

Use somente comparações encadeadas.

6) Aprovado com bônus

Peça duas notas.
Regra:

média ≥ 7 → aprovado

média entre 5 e 6.9 → pode ganhar bônus

média + bônus ≥ 7 → aprovado

caso contrário → reprovado

Use comparações para validar antes e depois do bônus.

7) Detectar crescimento de vendas

Peça o valor de vendas de 3 meses consecutivos.
Diga se houve:

crescimento constante

queda constante

comportamento misto

Exemplo:

100 → 120 → 150 (cresceu)

200 → 180 → 160 (caiu)

qualquer outra sequência → misto

8) Senha Forte

Peça uma senha e verifique se ela é forte usando comparações com propriedades da string:
Regras (todas devem ser verdadeiras):

tamanho ≥ 8

contém número

contém letra maiúscula

contém letra minúscula

contém caractere especial (ex.: ! @ # $ %)

(Pode usar includes() + comparações)

9) Sistema de notas “hardcore”

Peça uma nota de 0 a 100 e classifique:

A (≥ 90)

B (≥ 80)

C (≥ 70)

D (≥ 60)

E (≥ 50)

F (< 50)

Inclua também a validação:

nota < 0 → inválida

nota > 100 → inválida

10) 🔥 DESAFIO – Simulador de multa avançado

Peça a velocidade do motorista e o limite da via.
Regras:

Até o limite → “Dentro da velocidade”

Até 10% acima do limite → “Atenção: velocidade excedida levemente”

Entre 10% e 30% acima → “Você recebeu uma multa média”

Acima de 30% → “Multa gravíssima”

Use comparações com cálculos usando o limite:

limite * 1.1
limite * 1.3