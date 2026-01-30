const numeros = [1, 2, 3];
const numeros2 = [4, 5, 6]

console.log(numeros + numeros2); // Saída -> mistura aleatória

const n1 = [1, 2, 3];
const n2 = [4, 5, 6];
const a3 = n1.concat(n2); // método concat -> uni os elementos dos 2 arrays em outro array
const a4 = [...n1, ...n2]; // utilizando spread
console.log(a3);
console.log(a4);

// ADICIONANDO ITENS

const a5 = [...n1, 'Opa', ...n2, ...[9, 8, 7]];
console.log(a5);
