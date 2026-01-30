//                -4        -3      -2       -1 -> números negativos =  posicao do item - tamanho do array (Mateus = 0 - 4 = -4)
//                 0        1       2        3
let nomes = ['Mateus', 'Cris', 'Jonas', 'Joao'];


// REMOVENDO ELEMENTOS

const positivo = nomes.splice(3, 1); // a  partir índice 3 remova 1 elemento
nomes = ['Mateus', 'Cris', 'Jonas', 'Joao'];
const negativo = nomes.splice(-1, 1); // a  partir índice -1 remova 1 elelemento

console.log(nomes);
console.log(positivo);
console.log(negativo);

// ADICIONANDO / SUBSTITUINDO ELEMENTOS

nomes = ['Mateus', 'Cris', 'Jonas', 'Joao'];

const adicionando = nomes.splice(1, 0, 'Gabriel'); // no 1° índice remova 0 elementos e adicione 'Gabriel'
console.log(nomes);
const adicionandoRemovendo = nomes.splice(1, 1, 'Otavio'); // no 1° índice remova 1 elemento e adicione 'Otávio'
//                                                            no 1° índice substitua o elemento por 'Otávio'

console.log(nomes);

// MAX VALUE

console.log(Number.MAX_VALUE);
const addINomes = nomes.splice(Number.MAX_VALUE, 0, 'Maria', 'Jeremias', 'Cristiane'); // a partir do maior índice do array adiccione os itens 'Maria, 'jeremias' e 'Cristiane';
console.log(nomes);
