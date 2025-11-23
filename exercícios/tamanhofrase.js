// Entrada de dados
let frase = prompt('Digite uma frase:');

// Manipulação dos dados
let palavras = frase.split (' ');
let numeroPalavras = palavras.length;
let numeroCaracteres = frase.length;
let maiusculas = frase.toUpperCase();
let minusculas = frase.toLowerCase();
let primeiraLetra = frase[0];


// Saída de dados
console.log(`Frase original: ${frase}`);
console.log(`Quantidade de palavras: ${numeroPalavras}`);
console.log(` Quantidade de Caracteres: ${numeroCaracteres}`);
console.log(`Frase em letras maiúsculas: ${maiusculas}`);
console.log(`Frase em letras minúsculas: ${minusculas}`);
console.log(`Primeira letra da frase: ${primeiraLetra}`);
