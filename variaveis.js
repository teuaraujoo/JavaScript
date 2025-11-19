let nomeVariavel = 5;
let nomeVariavel2 = 'maçã';

console.log(nomeVariavel);
console.log(nomeVariavel2);

/* FIXME: camel Case -> forma de escrever no jascript - nao se utliza - ou _ se usa letras maiusculas
ex: nome_variavel 
No JavaScript: nomeVariavel */



/* Tipos de Dados das Variáveis 

1- String - texto

2- Number - números

3- Boolean - verdadeiro ou falso

4- Array - lista de valores (vetores)

5- Object - conjunto de valores 

*/

// 1- String 

let nome = 'Mateus';


// 2- Numbers

let idade = 17; // inteiros (int/integers)

let contaBancaria = 790.90; // float: números com casas decimais (precisa de 7 casas decimais, passou disso será arredondado no banco de dados)

// 3- Boolean (dois tipos de valores (true/false), usado geralmente para verificar se uma condição é verdadeira ou falsa)

let mateusCabeloCrespo = true;
let mateusCabeloLiso = false;

/* 4- Array (vetores)
contém diversos valores */

// cada item possui uma posição, onde a 1° posição é a "zero" a 2° é a "um" a 3° é "dois"

//utiliza-se par de colchetes

let frutas = ['maca', 'banana', 'laranja'];
console.log(frutas[0]); //acessar um item específico dentro de um array

// 5- Object (objeto) - conjunto de valores (propriedades e valores) - variavel que recebe múltiplas variáveis

//utiliza-se par de chaves

let xicara = {
    //características do objeto
    cor: 'branca',
    material: 'plástico',
    capacidade: '250ml',
    valor: 5.99,
    quebrada: false
}

/* mesmo padrão do SQL:
strings e todo outros tipos de dados -> com aspas 
numeros e booleanos -> sem aspas 
*/

console.log(xicara.cor); // acessar uma propriedade específica dentro de um objeto