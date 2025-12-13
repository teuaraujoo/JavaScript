// const ordem = valores => {
//     return valores.sort((a, b) => a - b)
// };


// console.log(ordem(numbers));

numbers = [1, 34, 4, 5, 7];

const ordem = valores => {
    return valores.toSorted((a, b) => a - b);
};

console.log(`Utilizando função: ${ordem(numbers)}`);
console.log(`Array original: ${numbers}`);

// metódo sort -> é mutável ou seja muda o arr original se tiver outras funcões sendo executadas para o mesmo arr o código pode dar erro
// metódo toSorted -> é imutável, logo não muda o arr original