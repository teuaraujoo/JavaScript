const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 7 , 8];

const semRepeticao = arr => [...new Set(arr)];

console.log(semRepeticao(numbers));